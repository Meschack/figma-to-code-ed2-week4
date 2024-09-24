'use server'

import prisma from '@/lib/prisma'
import { currentUser } from '@clerk/nextjs/server'
import { appointment, AppointmentStatus, Prisma } from '@prisma/client'

interface NewAppointmentData
  extends Omit<appointment, 'status' | 'id' | 'updatedAt' | 'createdAt'> {}

export interface GroupedAppointments {
  [date: string]: Prisma.appointmentGetPayload<{
    include: { appointment_type: { select: { name: true; duration: true } } }
  }>[]
}

export const get = async () => {
  const appointments = await prisma.appointment.findMany({
    orderBy: { createdAt: 'desc' },
    include: { appointment_type: { select: { name: true, duration: true } } }
  })

  const groupedAppointments = appointments.reduce((acc, appointment) => {
    const date = appointment.createdAt.toISOString().split('T')[0]
    if (!acc[date]) acc[date] = []

    acc[date].push(appointment)

    return acc
  }, {} as GroupedAppointments)

  return groupedAppointments
}

const create = async (data: NewAppointmentData) => {
  const appointment = prisma.appointment.create({
    data: { ...data, status: AppointmentStatus.SCHEDULED }
  })

  return appointment
}

const edit = async (
  appointment: string,
  data: Partial<Omit<NewAppointmentData, 'patient_clerk_id'>>
) => {
  const appointmentData = await prisma.appointment.findUniqueOrThrow({
    where: { id: appointment },
    select: { patient_clerk_id: true, start_at: true, status: true }
  })

  if (appointmentData.status !== AppointmentStatus.SCHEDULED) {
    throw new Error('Appointment is not longer editable')
  }

  const user = await currentUser()

  const doctorClerkId = process.env.DOCTOR_CLERK_ID

  if (
    user?.id !== appointmentData.patient_clerk_id ||
    user.id !== doctorClerkId
  ) {
    throw new Error('Unauthorized')
  }

  const appointmentType = await prisma.appointment_type.findUniqueOrThrow({
    where: { id: data.appointment_type_id },
    select: { duration: true }
  })

  /**
   * Date de fin du rendez-vous en millisecondes
   */
  const appointmentEndDate =
    new Date(appointmentData.start_at).getTime() +
    appointmentType.duration * 60 * 1000

  const now = Date.now()

  if (appointmentEndDate < now) {
    throw new Error('Appointment already ended')
  }

  const updatedAppointment = prisma.appointment.update({
    where: { id: appointment },
    data
  })

  return updatedAppointment
}

export { create, edit }

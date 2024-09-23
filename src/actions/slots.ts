import prisma from '@/lib/prisma'
import {
  addMinutes,
  setHours,
  setMinutes,
  isBefore,
  isAfter,
  areIntervalsOverlapping
} from 'date-fns'

const getAppointmentTypeDuration = async (id: string) => {
  const appointmentDuration = await prisma.appointment_type.findUniqueOrThrow({
    where: { id },
    select: { duration: true }
  })

  return appointmentDuration.duration
}

const getExistingReservations = async () => {
  const existingReservations = await prisma.appointment.findMany({
    select: { appointment_type: { select: { duration: true } }, start_at: true }
  })

  return existingReservations.map(reservation => ({
    start: reservation.start_at,
    end: addMinutes(reservation.start_at, reservation.appointment_type.duration)
  }))
}

export const getAvailableSlots = async (
  appointmentTypeId: string,
  date: Date
) => {
  try {
    const appointmentDuration =
      await getAppointmentTypeDuration(appointmentTypeId)
    const existingReservations = await getExistingReservations()

    const availableSlots: Date[] = []

    const workStart = setHours(setMinutes(date, 0), 8)
    const morningEnd = setHours(setMinutes(date, 0), 12)
    const afternoonStart = setHours(setMinutes(date, 0), 14)
    const workEnd = setHours(setMinutes(date, 0), 18)

    const addSlotsForPeriod = (start: Date, end: Date) => {
      let currentSlot = start

      while (isBefore(currentSlot, end)) {
        const slotEnd = addMinutes(currentSlot, appointmentDuration)

        if (isAfter(slotEnd, end)) break

        const isOverlapping = existingReservations.some(reservation =>
          areIntervalsOverlapping(
            { start: currentSlot, end: slotEnd },
            { start: reservation.start, end: reservation.end }
          )
        )

        if (!isOverlapping) {
          availableSlots.push(currentSlot)
          currentSlot = addMinutes(currentSlot, appointmentDuration)
        } else {
          const nextAvailableSlot =
            existingReservations.find(reservation =>
              areIntervalsOverlapping(
                { start: currentSlot, end: slotEnd },
                { start: reservation.start, end: reservation.end }
              )
            )?.end || currentSlot
          currentSlot = nextAvailableSlot
        }
      }
    }

    addSlotsForPeriod(workStart, morningEnd)
    addSlotsForPeriod(afternoonStart, workEnd)

    return availableSlots
  } catch (error) {
    return []
  }
}

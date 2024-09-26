'use server'

import { clerkClient } from '@/lib/clerk-client'
import prisma from '@/lib/prisma'

export const getClerkUserInformations = async (id: string) => {
  const { hasImage, imageUrl, fullName, emailAddresses } =
    await clerkClient.users.getUser(id)

  return { hasImage, imageUrl, fullName, email: emailAddresses[0].emailAddress }
}

export const get = async () => {
  const users = await prisma.appointment.groupBy({
    by: ['patient_clerk_id'],
    _count: { _all: true }
  })

  const usersWithAppointmentCount = await Promise.all(
    users.map(async user => ({
      ...(await getClerkUserInformations(user.patient_clerk_id)),
      id: user.patient_clerk_id,
      appointmentCount: user._count._all
    }))
  )

  return usersWithAppointmentCount
}

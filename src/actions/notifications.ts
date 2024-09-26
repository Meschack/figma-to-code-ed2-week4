'use server'

import prisma from '@/lib/prisma'
import { auth } from '@clerk/nextjs/server'
import { notifications, NotificationStatus } from '@prisma/client'

export interface GroupedNotifications {
  [date: string]: notifications[]
}

export const update = async (id: string): Promise<notifications> => {
  const { userId } = auth()

  const doctorId = process.env.DOCTOR_CLERK_ID

  if (!userId || userId !== doctorId) {
    throw new Error("You're not authorized to perform this action!")
  }

  const updatedNotification = await prisma.notifications.update({
    where: { id: id },
    data: { status: NotificationStatus.READ }
  })

  return updatedNotification
}

export const updateMany = async (ids: string[]): Promise<number> => {
  const result = await prisma.notifications.updateMany({
    where: { id: { in: ids } },
    data: { status: NotificationStatus.READ }
  })

  return result.count
}

export const get = async (): Promise<GroupedNotifications> => {
  const notifications = await prisma.notifications.findMany({
    where: { status: 'UNREAD' },
    orderBy: { created_at: 'desc' }
  })

  const groupedNotifications = notifications.reduce((acc, notification) => {
    const date = notification.created_at.toISOString().split('T')[0]

    if (!acc[date]) acc[date] = []

    acc[date].push(notification)

    return acc
  }, {} as GroupedNotifications)

  return groupedNotifications
}

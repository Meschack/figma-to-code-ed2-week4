'use client'

import { get, GroupedNotifications, updateMany } from '@/actions/notifications'
import { Button } from '@/components/common/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { notifications } from '@prisma/client'
import { useEffect, useMemo, useState } from 'react'
import { toast } from 'sonner'
import { AnimatePresence, motion } from 'framer-motion'
import { Icons } from '@/components/common/icons'
import { NotificationCard } from './notification-card'
import { format } from 'date-fns'

interface Props {}

export const NotificationsIndicator = ({}: Props) => {
  const [notifications, setNotifications] = useState<
    GroupedNotifications | undefined
  >()

  const totalNotifications = useMemo(
    () => (notifications ? Object.values(notifications).flat().length : 0),
    [notifications]
  )

  const handleMarkAllAsRead = async () => {
    if (!notifications) return

    const allIds = Object.values(notifications)
      .flat()
      .map(notification => notification.id)

    const previousNotifs = { ...notifications }

    setNotifications({})

    try {
      await updateMany(allIds)
    } catch (error) {
      toast.error('An error occurred while updating notifications')
      setNotifications(previousNotifs)
    }
  }

  const handleRemoveNotification = async (id: string) => {
    const updatedNotifs = { ...notifications }

    let removedNotif: notifications | null = null

    for (const date in updatedNotifs) {
      const index = updatedNotifs[date].findIndex(notif => notif.id === id)

      if (index !== -1) {
        removedNotif = updatedNotifs[date].splice(index, 1)[0]

        if (updatedNotifs[date].length === 0) delete updatedNotifs[date]

        break
      }
    }

    setNotifications(updatedNotifs)
    if (removedNotif) {
      try {
        await updateMany([id])
      } catch (error) {
        toast.error('The notification could not be deleted')

        setNotifications(prev => {
          if (prev) {
            const date = removedNotif!.created_at.toDateString()

            return {
              ...prev,
              [date]: [...(prev[date] || []), removedNotif!]
            }
          }
        })
      }
    }
  }

  const getNotifications = async () => {
    const newNotifications = await get()

    setNotifications(newNotifications)
  }

  useEffect(() => {
    getNotifications()
  }, [])

  if (!notifications) return <Icons.bell />

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='ghost' className='relative w-10 p-0'>
          <Icons.bell />

          {totalNotifications > 0 && (
            <div className='absolute right-[0.1rem] top-[0.1rem] flex h-[0.85rem] w-[0.85rem] items-center justify-center rounded-full bg-red-600 text-center text-[0.6rem] font-medium text-white'>
              <span className='flex items-center justify-center'>
                {totalNotifications < 99 ? totalNotifications : '99+'}
              </span>
            </div>
          )}
        </Button>
      </SheetTrigger>

      <SheetContent className='flex flex-col p-0'>
        <SheetHeader>
          <SheetTitle>Notifications</SheetTitle>
        </SheetHeader>

        <div className='flex h-full flex-col px-4'>
          <div className='scrollbar-hide flex-grow overflow-y-auto'>
            {totalNotifications > 0 ? (
              <div className='grid'>
                <AnimatePresence>
                  {Object.entries(notifications).map(
                    ([date, notificationsForDate]) => (
                      <motion.div key={date} layout>
                        <div className='sticky top-4 z-10'>
                          <div className='my-4 flex items-center justify-center'>
                            <span className='rounded-md bg-gray-500 px-2 py-1 text-xs font-medium text-white'>
                              {format(new Date(date), 'dd-MM-yyyy')}
                            </span>
                          </div>
                        </div>

                        <AnimatePresence>
                          <div className='space-y-2'>
                            {notificationsForDate.map(notification => (
                              <motion.div
                                key={notification.id}
                                initial={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <NotificationCard
                                  notification={notification}
                                  onRemove={handleRemoveNotification}
                                />
                              </motion.div>
                            ))}
                          </div>
                        </AnimatePresence>
                      </motion.div>
                    )
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <div className='flex h-full items-center justify-center'>
                <span className='text-gray-500'>
                  You don't have any new notification
                </span>
              </div>
            )}
          </div>

          <SheetFooter className='mt-auto py-4'>
            <SheetClose asChild>
              <Button
                variant='outline'
                type='submit'
                className='w-full'
                onClick={handleMarkAllAsRead}
                disabled={totalNotifications === 0}
              >
                Mark all as read
              </Button>
            </SheetClose>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  )
}

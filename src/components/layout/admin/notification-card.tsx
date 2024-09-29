import { update } from '@/actions/notifications'
import { Icons } from '@/components/common/icons'
import { cn } from '@/lib/utils'
import { Prisma } from '@prisma/client'
import { format } from 'date-fns'
import { motion } from 'framer-motion'
import { toast } from 'sonner'

interface NotificationCardProps {
  notification: Prisma.notificationsGetPayload<{
    select: {
      id: true
      title: true
      content: true
      url: true
      created_at: true
    }
  }>
  onRemove: (id: string) => void
}

export const NotificationCard = ({
  notification,
  onRemove
}: NotificationCardProps) => {
  const handleClose = async () => {
    onRemove(notification.id)

    try {
      await update(notification.id)
    } catch (error) {
      toast.error('The notification could not be deleted')

      onRemove(notification.id)
    }
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.3 }}
    >
      <div className='w-full cursor-pointer rounded-md border p-4 duration-200 hover:bg-muted'>
        <div className='mb-2 flex flex-row items-center justify-between'>
          <h3 className='text-xl font-semibold'>{notification.title}</h3>

          <button
            className='text-gray-400 transition-colors hover:text-gray-600'
            onClick={handleClose}
          >
            <Icons.cross className='h-4 w-4' />
          </button>
        </div>

        <p className='mb-4 text-[0.9rem] text-muted-foreground'>
          {notification.content}
        </p>

        <div
          className={cn(
            'flex',
            notification.url ? 'justify-between' : 'justify-end'
          )}
        >
          {notification.url && (
            <a
              href={notification.url}
              target='_blank'
              className='flex items-center gap-1 text-sm text-black hover:underline'
            >
              <span>See details</span>
              <Icons.externalLink className='size-3' />
            </a>
          )}

          <div className='text-xs text-gray-400'>
            {format(notification.created_at, 'hh:mm a')}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

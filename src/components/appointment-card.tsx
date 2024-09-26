import Image from 'next/image'
import { addMinutes } from 'date-fns'
import { cn } from '@/lib/utils'
import { GroupedAppointmentsWithUsers } from './pages/appointments'
import { ComponentProps } from 'react'
import { LoadingButton } from './common/loading-button'
import { AppointmentStatus } from '@prisma/client'

interface AppointmentCardProps extends ComponentProps<'div'> {
  appointment: GroupedAppointmentsWithUsers['appointments'][number]
  onManage: (
    action: 'accept' | 'cancel' | 'finish',
    appointment: string
  ) => void
  isManaging?: 'accept' | 'cancel' | 'finish'
  managingAppointment?: string
  canManage?: boolean
}

const options = {
  hour: 'numeric',
  minute: 'numeric',
  hour12: true
} as const

export const AppointmentCard = ({
  appointment,
  className,
  onClick,
  onManage,
  isManaging,
  managingAppointment,
  canManage,
  ...rest
}: AppointmentCardProps) => {
  const endAt = addMinutes(
    appointment.appointment.start_at,
    appointment.appointment.appointment_type.duration
  )

  return (
    <div
      className={cn(
        'cursor-pointer space-y-5 rounded-md border p-5 hover:bg-muted',
        className
      )}
      onClick={onClick}
      {...rest}
    >
      <header className='flex items-center gap-5'>
        <div>
          {appointment.user.hasImage ? (
            <Image
              src={appointment.user.imageUrl}
              alt='User image'
              width={50}
              height={50}
              className='rounded-full object-cover'
            />
          ) : (
            <div className='h-12 w-12 rounded-full bg-doctrin-neutral-secondary'></div>
          )}
        </div>

        <div>
          <h2>{appointment.user.fullName}</h2>
          <div className='flex items-center gap-2'>
            <span>
              {appointment.appointment.start_at.toLocaleTimeString(
                'en-US',
                options
              )}
            </span>

            <span>-</span>

            <span>{endAt.toLocaleTimeString('en-US', options)}</span>
          </div>
        </div>
      </header>

      <main className='space-y-3'>
        <p>{appointment.appointment.appointment_type.name}</p>
        <p>{appointment.appointment.reason || 'No reason provided !'}</p>
      </main>

      {!canManage && (
        <p>
          Status :{' '}
          <span
            className='font-medium'
            style={{
              color: `hsl(var(--appointment-${appointment.appointment.status.toLowerCase()}))`
            }}
          >
            {appointment.appointment.status}
          </span>
        </p>
      )}

      {appointment.appointment.status === AppointmentStatus.PENDING &&
        canManage && (
          <footer className='grid grid-cols-2 gap-5'>
            <LoadingButton
              onClick={event => {
                event.stopPropagation()

                onManage('cancel', appointment.appointment.id)
              }}
              variant='outline'
              loading={
                !!isManaging &&
                isManaging === 'cancel' &&
                managingAppointment === appointment.appointment.id
              }
            >
              Decline
            </LoadingButton>

            <LoadingButton
              onClick={event => {
                event.stopPropagation()

                onManage('accept', appointment.appointment.id)
              }}
              loading={
                !!isManaging &&
                isManaging === 'accept' &&
                managingAppointment === appointment.appointment.id
              }
            >
              Accept
            </LoadingButton>
          </footer>
        )}
    </div>
  )
}

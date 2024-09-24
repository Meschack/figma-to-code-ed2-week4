import Image from 'next/image'
import { Button } from './common/button'
import { addMinutes } from 'date-fns'
import { cn } from '@/lib/utils'
import { GroupedAppointmentsWithUsers } from './pages/appointments'
import { ComponentProps } from 'react'

interface AppointmentCardProps extends ComponentProps<'div'> {
  appointment: GroupedAppointmentsWithUsers['appointments'][number]
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

      <footer className='grid grid-cols-2 gap-5'>
        <Button variant='outline'>Decline Appointment</Button>
        <Button>Accept Appointment</Button>
      </footer>
    </div>
  )
}

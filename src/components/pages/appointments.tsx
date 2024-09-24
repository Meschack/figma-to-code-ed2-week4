'use client'

import { GroupedAppointments } from '@/actions/appointments'
import { addMinutes } from 'date-fns'
import Image from 'next/image'
import { Button } from '../common/button'
import { ComponentProps } from 'react'
import { cn } from '@/lib/utils'
import { parseAsString, useQueryStates } from 'nuqs'
import { ClerkUserImportantElements } from '@/types/user'

interface GroupedAppointmentsWithUsers {
  appointments: Array<{
    appointment: GroupedAppointments[number][number]
    user: ClerkUserImportantElements
  }>
  date: string
}

const options = {
  hour: 'numeric',
  minute: 'numeric',
  hour12: true
} as const

interface Props {
  appointments: Array<GroupedAppointmentsWithUsers>
}

/* interface State {
  selectedAppointment?: GroupedAppointmentsWithUsers['appointments'][number]
} */

export const Appointments = ({ appointments }: Props) => {
  const [_, setSearchParams] = useQueryStates(
    { selected: parseAsString },
    { clearOnDefault: true }
  )

  const onAppointmentSelect = (
    appointment: GroupedAppointmentsWithUsers['appointments'][number]
  ) => {
    setSearchParams({ selected: appointment.appointment.id })
  }

  return (
    <div>
      <div className='space-y-10'>
        <h1>Appointments</h1>

        <div className='space-y-10'>
          {appointments.map(({ appointments, date }) => {
            return (
              <div className='space-y-5' key={date}>
                <h3 className='mx-auto w-fit text-xl font-semibold'>{date}</h3>

                <div className='grid grid-cols-2 gap-8'>
                  {appointments.map(appointment => (
                    <AppointmentCard
                      appointment={appointment}
                      key={appointment.appointment.id}
                      onClick={() => onAppointmentSelect(appointment)}
                    />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

interface AppointmentCardProps extends ComponentProps<'div'> {
  appointment: GroupedAppointmentsWithUsers['appointments'][number]
}

const AppointmentCard = ({
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
        'cursor-pointer space-y-10 rounded-md border p-5 hover:bg-muted',
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

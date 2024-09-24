'use client'

import { GroupedAppointments } from '@/actions/appointments'
import { parseAsString, useQueryStates } from 'nuqs'
import { ClerkUserImportantElements } from '@/types/user'
import { AppointmentCard } from '../appointment-card'

export interface GroupedAppointmentsWithUsers {
  appointments: Array<{
    appointment: GroupedAppointments[number][number]
    user: ClerkUserImportantElements
  }>
  date: string
}

interface Props {
  appointments: Array<GroupedAppointmentsWithUsers>
}

/* interface State {
  selectedAppointment?: GroupedAppointmentsWithUsers['appointments'][number]
} */

export const Appointments = ({ appointments }: Props) => {
  const [searchParams, setSearchParams] = useQueryStates(
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

      {searchParams.selected && <div className='hidden'></div>}
    </div>
  )
}

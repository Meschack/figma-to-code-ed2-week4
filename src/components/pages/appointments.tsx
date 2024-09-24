'use client'

import { GroupedAppointments } from '@/actions/appointments'
import { parseAsString, useQueryStates } from 'nuqs'
import { ClerkUserImportantElements } from '@/types/user'
import { AppointmentCard } from '../appointment-card'
import { DateFilter } from '../date-filter'
import { DateRange } from 'react-day-picker'
import { formatDate } from 'date-fns'

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
    { selected: parseAsString, from: parseAsString, to: parseAsString },
    { clearOnDefault: true }
  )

  const onAppointmentSelect = (
    appointment: GroupedAppointmentsWithUsers['appointments'][number]
  ) => {
    setSearchParams({ selected: appointment.appointment.id })
  }

  const onDateRangeChange = (value: DateRange | undefined) => {
    setSearchParams(prev => ({
      ...prev,
      from: value && value.from ? formatDate(value.from, 'yyyy-MM-dd') : null,
      to: value && value.to ? formatDate(value.to, 'yyyy-MM-dd') : null
    }))
  }

  return (
    <div>
      <div className='space-y-10'>
        <div className='flex items-center justify-between'>
          <h1>Appointments</h1>

          <DateFilter onDateRangeChange={onDateRangeChange} />
        </div>

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

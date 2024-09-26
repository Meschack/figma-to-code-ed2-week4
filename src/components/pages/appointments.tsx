'use client'

import { GroupedAppointments, manage } from '@/actions/appointments'
import { parseAsString, useQueryStates } from 'nuqs'
import { ClerkUserImportantElements } from '@/types/user'
import { AppointmentCard } from '../appointment-card'
import { AppointmentDetailsSheet } from '../appointment-details-sheet'
import { toast } from 'sonner'
import { useState } from 'react'

export interface GroupedAppointmentsWithUsers {
  appointments: Array<{
    appointment: GroupedAppointments[number][number]
    user: ClerkUserImportantElements
  }>
  date: string
}

interface Props {
  appointments: Array<GroupedAppointmentsWithUsers>
  canManage: boolean
}

interface State {
  isManaging?: 'accept' | 'cancel' | 'finish'
  managingAppointment?: string
}

export const Appointments = ({ appointments, canManage }: Props) => {
  const [searchParams, setSearchParams] = useQueryStates(
    { selected: parseAsString, from: parseAsString, to: parseAsString },
    { clearOnDefault: true }
  )

  const [state, setState] = useState<State>({})

  const onAppointmentSelect = (
    appointment: GroupedAppointmentsWithUsers['appointments'][number]
  ) => {
    setSearchParams({ selected: appointment.appointment.id })
  }

  const onAppointmentManage = async (
    action: 'accept' | 'cancel' | 'finish',
    appointment: string
  ) => {
    try {
      setState(prev => ({
        ...prev,
        isManaging: action,
        managingAppointment: appointment
      }))

      await manage(action, appointment)

      toast.success(`The appointment has been marked as ${action}ed !`)
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message)
      }
    } finally {
      setState(prev => ({
        ...prev,
        isManaging: undefined,
        managingAppointment: undefined
      }))
    }
  }

  const selectedAppointment = searchParams.selected
    ? appointments
        .find(({ appointments }) =>
          appointments.some(
            appointment => appointment.appointment.id === searchParams.selected
          )
        )
        ?.appointments.find(
          appointment => appointment.appointment.id === searchParams.selected
        )
    : undefined

  return (
    <>
      <div className='space-y-10'>
        {appointments.map(({ appointments, date }) => {
          return (
            <div className='space-y-5' key={date}>
              <h3 className='mx-auto w-fit text-xl font-semibold'>{date}</h3>

              <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
                {appointments.map(appointment => (
                  <AppointmentCard
                    appointment={appointment}
                    key={appointment.appointment.id}
                    onClick={() => onAppointmentSelect(appointment)}
                    onManage={onAppointmentManage}
                    isManaging={state.isManaging}
                    managingAppointment={state.managingAppointment}
                    canManage={canManage}
                  />
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {selectedAppointment && (
        <AppointmentDetailsSheet
          open={!!searchParams.selected}
          onOpenChange={value =>
            !value && setSearchParams(prev => ({ ...prev, selected: null }))
          }
          appointment={selectedAppointment}
          onManage={onAppointmentManage}
          isManaging={state.isManaging}
          managingAppointment={state.managingAppointment}
        />
      )}
    </>
  )
}

'use client'
import { useState } from 'react'
import clsx from 'clsx'

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
  const [openDetailModal, setOpenDetailModal] = useState(false)
  const [searchParams, setSearchParams] = useQueryStates(
    { selected: parseAsString, from: parseAsString, to: parseAsString },
    { clearOnDefault: true }
  )

  const onAppointmentSelect = (
    appointment: GroupedAppointmentsWithUsers['appointments'][number]
  ) => {
    setSearchParams({ selected: appointment.appointment.id })
    toggleDetailModal()
  }

  const onDateRangeChange = (value: DateRange | undefined) => {
    setSearchParams(prev => ({
      ...prev,
      from: value && value.from ? formatDate(value.from, 'yyyy-MM-dd') : null,
      to: value && value.to ? formatDate(value.to, 'yyyy-MM-dd') : null
    }))
  }

  function toggleDetailModal() {
    setOpenDetailModal(!openDetailModal)
  }

  return (
    <>
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
                  <h3 className='mx-auto w-fit text-xl font-semibold'>
                    {date}
                  </h3>

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

      {/** Detail modal */}
      <div
        className={clsx(
          'fixed left-0 top-0 z-40 h-full w-full bg-[rgba(0,0,0,0.4)]',
          openDetailModal ? 'block' : 'hidden'
        )}
        onClick={toggleDetailModal}
      ></div>
      <div
        className={clsx(
          'fixed top-0 z-50 h-full w-[400px] overflow-auto bg-white py-5 text-blue-950 shadow-lg duration-500 ease-linear max-[410px]:w-full',
          openDetailModal ? 'right-0' : '-right-full'
        )}
      >
        <div className='flex items-center justify-between gap-2 border-b-2 px-5 pb-3'>
          <h2 className='text-xl font-semibold sm:text-2xl'>
            Appointment detail
          </h2>
          <button onClick={toggleDetailModal}>
            <div className='h-1 w-5 rotate-45 rounded-lg bg-blue-950'></div>
            <div className='h-1 w-5 -translate-y-1 -rotate-45 rounded-lg bg-blue-950'></div>
          </button>
        </div>

        <div className='mt-5 flex flex-col gap-2 px-5'>
          <span className='text-sm uppercase'>Patient information</span>
          <div className='flex items-center gap-4'>
            <div className='size-20 rounded-full border-2 bg-slate-200'>
              {/** User profile img */}
            </div>
            <div className='flex h-full flex-col justify-between'>
              <h2 className='text-xl font-semibold sm:text-2xl'>
                Mr. Watkins Rome
              </h2>
              <span className='text-gray-500'>
                Ranchview Richardson, California 62639
              </span>
            </div>
          </div>
        </div>

        <div className='mt-8 flex flex-col gap-6 px-5'>
          <span className='text-sm uppercase'>Appointment detail</span>

          <div className='flex flex-col gap-3'>
            <span className='text-gray-500'>Date</span>
            <span className='font-semibold'>
              Monday Dec 14,2021 on 08 AM - 10 AM
            </span>
          </div>

          <div className='flex flex-col gap-3'>
            <span className='text-gray-500'>Area of interest</span>
            <span className='font-semibold'>Diabetes control appointment</span>
          </div>

          <div className='flex flex-col gap-3'>
            <span className='text-gray-500'>Problem</span>
            <span className='font-semibold'>
              Blood sugar management is especially important for people with
              diabetes, as chronically high blood sugar levels can lead
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

'use client'

import { useRef, useState, useTransition } from 'react'
import { addDays, formatDate, startOfDay } from 'date-fns'
import { Calendar } from '../ui/calendar'
import { fr } from 'date-fns/locale'
import { useQueryStates, parseAsString } from 'nuqs'
import { appointment_type } from '@prisma/client'
import { AppointmentTypeSelector } from '../appointment-type-selector'
import { Button, buttonVariants } from '../common/button'
import { cn } from '@/lib/utils'
import { Skeleton } from '../ui/skeleton'
import { ToggleGroup, ToggleGroupItem } from '../ui/toggle-group'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '../ui/dialog'
import { LoadingButton } from '../common/loading-button'
import { create } from '@/actions/appointments'

interface Props {
  date?: Date
  slots: Date[]
  appointmentTypes: appointment_type[]
  user: string
}

interface State {
  displayAllSessions: boolean
  date: Date
  chosenSlot: Date | null
  buttonLoader?: boolean
  open?: boolean
}

const NUMBER_OF_DEFAULT_DISPLAYED_SESSIONS = 12

const options: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}

const timeOptions: Intl.DateTimeFormatOptions = {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false
}

export const Booking = ({ date, appointmentTypes, slots, user }: Props) => {
  const tomorrow = addDays(new Date(), 1)

  const [state, setState] = useState<State>({
    displayAllSessions: false,
    date: date && date >= startOfDay(tomorrow) ? date : tomorrow,
    chosenSlot: null
  })

  const [slotsLoader, startTransition] = useTransition()

  const [searchParams, setSearchParams] = useQueryStates(
    {
      date: parseAsString.withDefault(formatDate(tomorrow, 'yyyy-MM-dd')),
      appointment_type: parseAsString.withDefault(appointmentTypes[0].id)
    },
    { shallow: false, clearOnDefault: true, history: 'push', startTransition }
  )

  const onDayChange = (newDate: Date | undefined) => {
    if (!newDate) return

    setState(prev => ({ ...prev, date: newDate }))

    const date = formatDate(newDate, 'yyyy-MM-dd')

    setSearchParams(prev => ({ ...prev, date }))
  }

  const onSelectedAppointmentTypeChange = (value: string) => {
    setSearchParams(prev => ({ ...prev, appointment_type: value }))
  }

  const handleSelectSlot = (slot: Date) => {
    if (state.chosenSlot && state.chosenSlot === slot) {
      setState(prev => ({ ...prev, chosenSlot: null }))

      return
    }

    setState(prev => ({ ...prev, chosenSlot: slot }))
  }

  const onSubmit = async (reason: string) => {
    if (!state.chosenSlot) return

    try {
      setState(prev => ({ ...prev, buttonLoader: true }))

      await create({
        appointment_type_id: searchParams.appointment_type,
        start_at: state.chosenSlot,
        patient_clerk_id: user,
        reason
      })

      setState(prev => ({ ...prev, buttonLoader: false }))

      window.location.href = '/confirmation'
    } catch (error) {
      setState(prev => ({
        ...prev,
        buttonLoader: false,
        error: 'Une erreur est survenue'
      }))
    }
  }

  const onOpenChange = (value: boolean) => {
    setState(prev => ({ ...prev, open: value }))
  }

  const initAppointmentCreation = () => {
    if (!state.chosenSlot) return

    setState(prev => ({ ...prev, open: true }))
  }

  return (
    <div className='grid grid-cols-1 gap-10 lg:grid-cols-3'>
      <div className='col-span-full space-y-5 lg:col-span-2'>
        <p>Check our avalibility and book the date and time that suits you.</p>

        <Calendar
          mode='single'
          defaultMonth={state.date}
          selected={state.date}
          onSelect={onDayChange}
          fromDate={tomorrow}
          locale={fr}
        />
      </div>

      <div className='col-span-full space-y-5 lg:col-span-1'>
        <form action='' className='flex flex-col gap-3'>
          <label htmlFor='appointment_type'>Select a type of appointment</label>

          <AppointmentTypeSelector
            appointmentTypes={appointmentTypes}
            current={searchParams.appointment_type}
            onChange={onSelectedAppointmentTypeChange}
          />
        </form>

        <div className='w-full'>
          <p className='capitalize'>
            {state.date.toLocaleDateString('fr-FR', options)}
          </p>

          {slotsLoader ? (
            <SlotsLoader />
          ) : slots.length ? (
            <div>
              <ToggleGroup
                variant='outline'
                size='lg'
                type='single'
                className={cn(
                  'grid grid-cols-[repeat(auto-fill,_minmax(100px,_1fr))] gap-3 py-3'
                )}
              >
                {slots
                  .slice(
                    0,
                    state.displayAllSessions
                      ? undefined
                      : NUMBER_OF_DEFAULT_DISPLAYED_SESSIONS
                  )
                  .map((slot, index) => (
                    <ToggleGroupItem
                      value={`${slot}-${index}`}
                      aria-label={`Toggle ${slot}`}
                      key={index}
                      className={cn(
                        buttonVariants({ variant: 'outline' }),
                        'whitespace-nowrap rounded-none border-black disabled:!bg-gray-100 aria-checked:!bg-doctrin-blue aria-checked:!text-white'
                      )}
                      onClick={() => handleSelectSlot(slot)}
                    >
                      {new Date(slot).toLocaleTimeString('fr-FR', timeOptions)}
                    </ToggleGroupItem>
                  ))}
              </ToggleGroup>

              {slots.length > NUMBER_OF_DEFAULT_DISPLAYED_SESSIONS && (
                <Button
                  variant='link'
                  className='mx-auto block p-0'
                  onClick={() =>
                    setState(prev => ({
                      ...prev,
                      displayAllSessions: !prev.displayAllSessions
                    }))
                  }
                >
                  Voir
                  {state.displayAllSessions ? ' moins de ' : ' toutes les '}
                  séances
                </Button>
              )}
            </div>
          ) : (
            <p className='mt-3'>No slot available</p>
          )}
        </div>

        <Button className='w-full' onClick={initAppointmentCreation}>
          Book now
        </Button>

        <AppointmentReasonDialog
          onSubmit={onSubmit}
          open={state.open}
          onOpenChange={onOpenChange}
          loading={state.buttonLoader}
        />
      </div>
    </div>
  )
}

const SlotsLoader = () => (
  <div className='grid grid-cols-2 gap-3 py-3'>
    {Array.from({ length: 6 }).map((_, index) => (
      <Skeleton className='h-8 rounded-none' key={index} />
    ))}
  </div>
)

interface AppointmentReasonDialogProps {
  open: boolean | undefined
  onOpenChange: (value: boolean) => void
  onSubmit: (reason: string) => void
  loading: boolean | undefined
}

const AppointmentReasonDialog = ({
  onOpenChange,
  open,
  onSubmit,
  loading
}: AppointmentReasonDialogProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Why do you want to book an appointment?</DialogTitle>

          <DialogDescription>
            Enter the reason for your appointment booking.
          </DialogDescription>
        </DialogHeader>

        <div className='grid gap-4 py-4'>
          <div className='grid gap-4'>
            <label htmlFor='reason'>Reason</label>
            <input
              id='reason'
              className='flex h-10 w-full rounded-none border border-muted-foreground bg-transparent px-3 py-1 text-sm transition-colors file:border-0 placeholder:text-muted-foreground focus-visible:outline-none'
              ref={inputRef}
            />
          </div>
        </div>

        <DialogFooter>
          <LoadingButton
            onClick={() =>
              onSubmit(inputRef.current !== null ? inputRef.current.value : '')
            }
            loading={loading}
            type='submit'
          >
            Continue
          </LoadingButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

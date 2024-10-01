import { DialogProps } from '@radix-ui/react-dialog'
import { GroupedAppointmentsWithUsers } from '../pages/appointments'
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle
} from '../ui/sheet'
import { formatDate } from 'date-fns'
import { LoadingButton } from '../common/loading-button'
import { AppointmentStatus } from '@prisma/client'
import { CustomImage } from '../common/custom-image'

interface Props {
  appointment: GroupedAppointmentsWithUsers['appointments'][number]
  open: DialogProps['open']
  onOpenChange: DialogProps['onOpenChange']
  onManage: (
    action: 'accept' | 'cancel' | 'finish',
    appointment: string
  ) => void
  isManaging?: 'accept' | 'cancel' | 'finish'
  managingAppointment?: string
  canManage: boolean
}

export const AppointmentDetailsSheet = ({
  open,
  onOpenChange,
  appointment,
  onManage,
  isManaging,
  managingAppointment,
  canManage
}: Props) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className='flex flex-col gap-5 p-0'>
        <SheetHeader>
          <SheetTitle>Appointment details</SheetTitle>
        </SheetHeader>

        <div className='scrollbar-hide grid gap-4 overflow-x-auto px-4'>
          <div className='space-y-4'>
            <h2 className='text-sm uppercase'>Patient information</h2>
            <div className='flex items-center gap-4'>
              <div className='relative size-14 shrink-0 overflow-hidden rounded-full md:size-20'>
                <CustomImage
                  src={appointment.user.imageUrl}
                  alt='User profile image'
                  fill
                  className='rounded-full object-cover'
                />
              </div>

              <div className='flex h-full flex-col justify-between'>
                <p className='text-xl font-semibold sm:text-2xl'>
                  {appointment.user.fullName}
                </p>

                <span className='text-gray-500'>{appointment.user.email}</span>
              </div>
            </div>
          </div>

          <div className='mt-8 flex flex-col gap-6'>
            <h2 className='text-sm uppercase'>Appointment detail</h2>

            <div className='flex flex-col gap-3'>
              <h3 className='text-gray-500'>Date</h3>
              <p className='font-medium'>
                {formatDate(
                  appointment.appointment.start_at,
                  "EEEE MMM d, yyyy 'at' h a"
                )}
              </p>
            </div>

            <div className='flex flex-col gap-3'>
              <h3 className='text-gray-500'>Area of interest</h3>
              <p className='font-medium'>
                {appointment.appointment.appointment_type.name}
              </p>
            </div>

            {appointment.appointment.reason && (
              <div className='flex flex-col gap-3'>
                <h3 className='text-gray-500'>Problem</h3>
                <p className='font-medium'>{appointment.appointment.reason}</p>
              </div>
            )}
          </div>
        </div>

        {appointment.appointment.status === AppointmentStatus.PENDING &&
          canManage && (
            <SheetFooter className='mt-auto h-fit items-center border-t-2 py-5 sm:justify-center'>
              <div className='grid w-full grid-cols-2 gap-2 px-4'>
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
              </div>
            </SheetFooter>
          )}
      </SheetContent>
    </Sheet>
  )
}

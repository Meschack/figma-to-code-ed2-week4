import { get } from '@/actions/appointments'
import { getClerkUserInformations } from '@/actions/users'
import { ErrorComponent } from '@/components/common/error'
import { Appointments } from '@/components/pages/appointments'
import { searchParamsCache } from '@/config/appointments'
import { AppointmentStatus } from '@prisma/client'

export const metadata = { title: 'Appointments' }

interface Props {
  searchParams: { status: string | undefined }
}

const Page = async ({ searchParams }: Props) => {
  try {
    const { status } = searchParamsCache.parse(searchParams)

    const appointments = await get({
      status:
        status !== 'all'
          ? (status.toUpperCase() as AppointmentStatus)
          : undefined
    })

    const appointmentsWithUsers = await Promise.all(
      Object.keys(appointments).map(async date => {
        const keyAppointments = appointments[date]

        const appointmentAndUser = await Promise.all(
          keyAppointments.map(async appointment => {
            const user = await getClerkUserInformations(
              appointment.patient_clerk_id
            )

            return { appointment, user }
          })
        )

        return { appointments: appointmentAndUser, date }
      })
    )

    return (
      <div className='space-y-10'>
        <Appointments canManage appointments={appointmentsWithUsers} />
      </div>
    )
  } catch (error) {
    return (
      <ErrorComponent
        title='An error occurred'
        description='An error occurred while fetching the data.'
        label='Retry'
        to=''
      />
    )
  }
}
export default Page

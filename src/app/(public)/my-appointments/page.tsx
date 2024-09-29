import { get } from '@/actions/appointments'
import { getClerkUserInformations } from '@/actions/users'
import { ErrorComponent } from '@/components/common/error'
import { Wrapper } from '@/components/common/wrapper'
import { Appointments } from '@/components/pages/appointments'
import { searchParamsCache } from '@/config/appointments'
import { auth } from '@clerk/nextjs/server'
import { AppointmentStatus } from '@prisma/client'

export const metadata = {
  title: 'My appointments',
  description: 'Check your appointments.'
}

interface Props {
  searchParams: { status: string | undefined }
}

const Page = async ({ searchParams }: Props) => {
  try {
    const userId = auth().userId

    if (!userId) return null

    const { status } = searchParamsCache.parse(searchParams)

    const appointments = await get({
      userId,
      status:
        status !== 'all'
          ? (status.toUpperCase() as AppointmentStatus)
          : undefined
    })

    const user = await getClerkUserInformations(userId)

    const appointmentsWithUsers = await Promise.all(
      Object.keys(appointments).map(async date => {
        const keyAppointments = appointments[date]

        const appointmentAndUser = await Promise.all(
          keyAppointments.map(async appointment => {
            return { appointment, user }
          })
        )

        return { appointments: appointmentAndUser, date }
      })
    )

    return (
      <Wrapper className='space-y-10'>
        <Appointments canManage={false} appointments={appointmentsWithUsers} />
      </Wrapper>
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

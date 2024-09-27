import { get } from '@/actions/appointments'
import { getClerkUserInformations } from '@/actions/users'
import { ErrorComponent } from '@/components/common/error'
import { Appointments } from '@/components/pages/appointments'

export const metadata = {
  title: 'Appointments'
}

const Page = async () => {
  try {
    const appointments = await get()

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
        <h1>Appointments</h1>

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

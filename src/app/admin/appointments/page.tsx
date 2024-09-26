import { get } from '@/actions/appointments'
import { getClerkUserInformations } from '@/actions/users'
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
  } catch (error) {}
}

export default Page

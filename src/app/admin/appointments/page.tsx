import { get } from '@/actions/appointments'
import { Appointments } from '@/components/pages/appointments'
import { clerkClient } from '@/lib/clerk-client'

interface Props {}

const Page = async ({}: Props) => {
  try {
    const appointments = await get()

    const appointmentsWithUsers = await Promise.all(
      Object.keys(appointments).map(async date => {
        const keyAppointments = appointments[date]

        const appointmentAndUser = await Promise.all(
          keyAppointments.map(async appointment => {
            const user = await clerkClient.users.getUser(
              appointment.patient_clerk_id
            )

            const requiredUserElements = {
              fullName: user.fullName,
              hasImage: user.hasImage,
              imageUrl: user.imageUrl
            }

            return {
              appointment,
              user: requiredUserElements
            }
          })
        )

        return { appointments: appointmentAndUser, date }
      })
    )

    return <Appointments appointments={appointmentsWithUsers} />
  } catch (error) {}
}

export default Page

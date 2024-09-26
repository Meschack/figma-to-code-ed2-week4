import { get } from '@/actions/appointments'
import { getClerkUserInformations } from '@/actions/users'
import { Wrapper } from '@/components/common/wrapper'
import { Appointments } from '@/components/pages/appointments'
import { auth } from '@clerk/nextjs/server'

interface Props {}

const Page = async ({}: Props) => {
  try {
    const { userId } = auth()

    if (!userId) return null

    const appointments = await get(userId)

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
      <Wrapper>
        <h1>My appointments</h1>

        <Appointments canManage={false} appointments={appointmentsWithUsers} />
      </Wrapper>
    )
  } catch (error) {}
}

export default Page

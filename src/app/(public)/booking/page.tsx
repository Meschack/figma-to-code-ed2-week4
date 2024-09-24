import { getAvailableSlots } from '@/actions/slots'
import { Wrapper } from '@/components/common/wrapper'
import { Booking } from '@/components/pages/booking'
import { tommorow } from '@/data'
import prisma from '@/lib/prisma'
import { auth, currentUser } from '@clerk/nextjs/server'
import { formatDate } from 'date-fns'
import { redirect } from 'next/navigation'
import { createSearchParamsCache, parseAsString } from 'nuqs/server'

const searchParamsCache = createSearchParamsCache({
  date: parseAsString.withDefault(formatDate(tommorow, 'yyyy-MM-dd')),
  appointment_type: parseAsString
})

export const dynamic = 'force-dynamic'

interface PageProps {
  searchParams: { date: string; appointment_type: string }
}

const Page = async ({ searchParams }: PageProps) => {
  let shouldRedirect = false

  try {
    const userId = auth().userId

    const doctorId = process.env.DOCTOR_CLERK_ID

    if (userId === doctorId) {
      shouldRedirect = true

      return
    }

    const { date, appointment_type } = searchParamsCache.parse(searchParams)

    const appointmentTypes = await prisma.appointment_type.findMany()

    const slots = await getAvailableSlots(
      appointment_type || appointmentTypes[0].id,
      new Date(date)
    )

    const loggedInUser = await currentUser()

    if (loggedInUser) {
      return (
        <Wrapper>
          <Booking
            date={new Date(searchParams.date)}
            slots={slots}
            appointmentTypes={appointmentTypes}
            user={loggedInUser.id}
          />
        </Wrapper>
      )
    }

    return (
      <Wrapper>
        <h1>Vous devez être connecté pour faire une réservation !</h1>
      </Wrapper>
    )
  } catch (error) {
    return <p>Une erreur est survenue</p>
  } finally {
    if (shouldRedirect) {
      redirect('/')
    }
  }
}

export default Page

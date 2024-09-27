import { getAvailableSlots } from '@/actions/slots'
import { ErrorComponent } from '@/components/common/error'
import { Wrapper } from '@/components/common/wrapper'
import { Booking } from '@/components/pages/booking'
import { tommorow } from '@/data'
import prisma from '@/lib/prisma'
import { auth } from '@clerk/nextjs/server'
import { formatDate } from 'date-fns'
import { createSearchParamsCache, parseAsString } from 'nuqs/server'

const searchParamsCache = createSearchParamsCache({
  date: parseAsString.withDefault(formatDate(tommorow, 'yyyy-MM-dd')),
  appointment_type: parseAsString
})

export const metadata = {
  title: 'Booking',
  description:
    'Check our avalibility and book the date and time that suits you.'
}

export const dynamic = 'force-dynamic'

interface PageProps {
  searchParams: { date: string; appointment_type: string }
}

const Page = async ({ searchParams }: PageProps) => {
  try {
    const { date, appointment_type } = searchParamsCache.parse(searchParams)

    const appointmentTypes = await prisma.appointment_type.findMany()

    const slots = await getAvailableSlots(
      appointment_type || appointmentTypes[0].id,
      new Date(date)
    )

    const { userId } = auth()

    if (userId) {
      return (
        <Wrapper>
          <Booking
            date={new Date(searchParams.date)}
            slots={slots}
            appointmentTypes={appointmentTypes}
            user={userId}
          />
        </Wrapper>
      )
    }
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

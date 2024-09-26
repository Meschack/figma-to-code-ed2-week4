import {
  getAppointmentsByStatus,
  getAppointmentsPerMonth
} from '@/actions/appointments'
import { AppointmentsMontlyStatistics } from '@/components/appointments-montly-statistics'
import { AppointmentsStatistics } from '@/components/appointments-statistics'
import { currentUser } from '@clerk/nextjs/server'

interface Props {}

const Page = async ({}: Props) => {
  try {
    const monthlyStatistics = await getAppointmentsPerMonth()
    const appointmentsByStatus = await getAppointmentsByStatus()

    const doctorFullName = (await currentUser())?.fullName

    return (
      <div className='space-y-5'>
        <h1>Welcome back dr. {doctorFullName}</h1>

        <div className='grid grid-cols-1 gap-x-0 gap-y-5 lg:grid-cols-5 lg:gap-x-5'>
          <AppointmentsStatistics
            data={appointmentsByStatus}
            className='lg:col-span-2'
          />

          <AppointmentsMontlyStatistics
            className='lg:col-span-3'
            chartData={monthlyStatistics.reverse()}
          />
        </div>
      </div>
    )
  } catch (error) {}
}

export default Page

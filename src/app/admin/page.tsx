import {
  getAppointmentsByStatus,
  getAppointmentsPerMonth
} from '@/actions/appointments'
import { AppointmentsMontlyStatistics } from '@/components/appointments/appointments-montly-statistics'
import { AppointmentsStatistics } from '@/components/appointments/appointments-statistics'
import { ErrorComponent } from '@/components/common/error'
import { currentUser } from '@clerk/nextjs/server'

const Page = async () => {
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
            chartData={monthlyStatistics}
          />
        </div>
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

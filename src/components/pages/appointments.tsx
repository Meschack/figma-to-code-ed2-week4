import { GroupedAppointments } from '@/actions/appointments'

interface Props {
  appointments: GroupedAppointments
}

export const Appointments = ({ appointments }: Props) => {
  return (
    <div>
      <div>
        <h1>Appointments</h1>
      </div>
    </div>
  )
}

interface AppointmentCardProps {
  appointment: GroupedAppointments[number][number]
}

const AppointmentCard = ({ appointment }: AppointmentCardProps) => {
  return <div className='rounded border-doctrin-neutral-secondary p-5'></div>
}

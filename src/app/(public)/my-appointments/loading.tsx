import AppointmentListLoading from '@/app/admin/appointments/loading'
import { Wrapper } from '@/components/common/wrapper'

const Loading = () => {
  return (
    <Wrapper>
      <AppointmentListLoading canManage={false} />
    </Wrapper>
  )
}

export default Loading

import { ErrorComponent } from '@/components/common/error'
import { Wrapper } from '@/components/common/wrapper'

const NotFound = () => {
  return (
    <Wrapper className='grid min-h-screen place-content-center'>
      <ErrorComponent />
    </Wrapper>
  )
}

export default NotFound

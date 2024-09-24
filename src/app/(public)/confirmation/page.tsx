import { Icons } from '@/components/common/icons'
import { Wrapper } from '@/components/common/wrapper'

export const metadata = {
  title: 'Booking Confirmation'
}

const Page = () => {
  return (
    <Wrapper className='py-18 flex items-center justify-center'>
      <div className='space-y-2.5 *:mx-auto *:w-fit'>
        <Icons.circleCheck />

        <div className='space-y-1 *:mx-auto *:w-fit'>
          <h1 className='text-center text-base font-semibold md:text-lg'>
            Thanks for booking your appointment !
          </h1>

          <p className='text-dark-gray text-center text-xs font-medium'>
            A notification have been sent to the doctor and he is already
            examinating your request !
          </p>
        </div>
      </div>
    </Wrapper>
  )
}

export default Page

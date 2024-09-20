import { Button } from '@/components/common/button'
import { Icons } from '@/components/common/icons'
import { Wrapper } from '@/components/common/wrapper'

const Home = () => {
  return (
    <>
      <Wrapper className='w-full space-y-8 lg:w-1/2'>
        <h1 className='text-6xl'>
          Get ready for your best ever Medecine Experience !
        </h1>

        <p>
          We use only the best quality materials on the market in order to
          provide the best products to our patients, So don’t worry about
          anything and book yourself.
        </p>

        <div className='flex w-full items-stretch gap-2'>
          <Button className='btn btn-primary h-14'>Book an appointment</Button>

          <div className='flex items-center gap-2'>
            <div className='grid size-14 place-content-center rounded-lg border-2 border-doctrin-blue'>
              <div>
                <div className='grid size-11 place-content-center rounded-lg bg-gradient-to-t from-[#E6F6FE] to-[#E6F6FE]'>
                  <Icons.phone />
                </div>
              </div>
            </div>

            <div>
              <p className='text-doctrin-blue'>Medical 24H Emergency</p>
              <span>0900-78601</span>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  )
}

export default Home

import Image from 'next/image'
import { Wrapper } from '../common/wrapper'
import { Icons } from '../common/icons'
import { Button } from '../common/button'
import heroImage from '@@/images/hero_img.png'

export const HeroSection = () => {
  return (
    <Wrapper className='flex flex-col-reverse items-center justify-between gap-6 px-4 py-6 lg:flex-row lg:items-start'>
      <div className='space-y-4 lg:space-y-8'>
        <h1 className='text-4xl font-bold sm:text-5xl md:text-6xl'>
          Get ready for your best ever Medicine Experience!
        </h1>

        <p className='text-sm font-medium sm:text-base md:text-lg'>
          We use only the best quality materials on the market to provide the
          best products to our patients, So don’t worry about anything and book
          yourself.
        </p>

        <div className='flex w-full flex-col items-center gap-4 sm:flex-row'>
          <Button asChild>
            <a href='/booking' className='!h-full w-full sm:w-auto'>
              Book an appointment
            </a>
          </Button>

          <div className='hidden w-full items-center gap-4 sm:mx-0 sm:w-fit lg:flex'>
            <div className='grid place-content-center rounded-lg border-2 border-doctrin-blue p-3'>
              <Icons.phone className='text-doctrin-blue' />
            </div>

            <div>
              <p className='font-semibold text-doctrin-blue'>
                Medical 24H Emergency
              </p>
              <span className='text-xs md:text-sm'>0900-78601</span>
            </div>
          </div>
        </div>
      </div>

      <Image
        src={heroImage}
        alt='Hero Section Image'
        className='max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg'
      />
    </Wrapper>
  )
}

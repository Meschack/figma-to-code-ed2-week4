import Image from 'next/image'
import { Wrapper } from '../common/wrapper'
import { Button } from '../common/button'

export const CTASection = () => {
  return (
    <Wrapper className='bg-doctrin-dark-cta-section my-10 rounded-2xl p-6 md:py-10'>
      <div className='mx-auto flex max-w-7xl flex-col-reverse items-center gap-8 px-8 md:flex-row md:justify-between'>
        <div className='space-y-6 text-center md:text-left'>
          <h1 className='text-3xl font-semibold text-white md:text-4xl'>
            A Healthcare Experience That’s Changing The Game.
          </h1>
          <p className='text-lg text-gray-300'>
            We use only the best quality materials on the market in order to
            provide the best products to our patients.
          </p>
          <div className='py-4'>
            <Button asChild>
              <a href='/booking'>Book an appointment</a>
            </Button>
          </div>
        </div>

        <div className='flex justify-end md:w-1/2'>
          <Image
            src='/images/healthcare-image.svg'
            alt='Dental Image'
            className='rounded-lg shadow-lg'
            width={300}
            height={300}
          />
        </div>
      </div>
    </Wrapper>
  )
}

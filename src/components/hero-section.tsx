import Image from 'next/image'
import { Wrapper } from './common/wrapper'
import { Button } from './common/button'
import { Icons } from './common/icons'

export const HeroSection = () => {
  return (
    <Wrapper className='flex items-center justify-between'>
      <div className='space-y-8 lg:w-3/4 xl:w-3/5'>
        <h1 className='text-6xl'>
          Get ready for your best ever Medecine Experience!
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
      </div>

      <Image
        src='/images/hero-section.svg'
        alt='Hero Section Image'
        width={600}
        height={600}
      />
    </Wrapper>
  )

  /* <div className='hidden max-w-sm rounded-2xl border bg-white px-6 py-4 shadow-md'>
      <div className='flex items-center justify-between'>
        <div className='flex'>
          <Image
            alt='Avatar'
            src='/images/thomas-daniel.svg'
            width={50}
            height={50}
          />
          <div className='ml-4 text-sm'>
            <h3 className='font-semibold'>Dr Thomas Daniel</h3>
            <p>Sr Dental</p>
          </div>
        </div>

        <Image
          src='/icons/linkedin.svg'
          alt='Linkedin'
          width={40}
          height={40}
        />
      </div>
      <p className='mb-2 mt-3 text-sm'>
        Top Quality dental treatment done by field experts, Highly
        Recommended for everyone
      </p>
    </div> */
}

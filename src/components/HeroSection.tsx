import Button from './Button'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <div className='max-w-6xl mx-auto px-4 font-general-sans'>
      <div className='flex items-center justify-between lg:flex-row flex-col gap-5'>
        <div className='flex- flex-col space-y-7'>
          <h1 className='text-5xl font-semibold leading-tight'>
            Get Ready For Your Best Ever Dental Experience!
          </h1>
          <p className='text-body-text max-w-lg'>
            We use only the best quality materials on the market in order to
            provide the best products to our patients, So don’t worry about
            anything and book yourself.
          </p>
          <div className='flex items-center gap-4 pb-3'>
            <Button href='/book-appointment' text='Book an appointment' />
            <div className='flex items-center space-x-4'>
              <div className='rounded-lg border border-primary-blue p-1'>
                <Image
                  src='/images/phone-icon.svg'
                  alt='Phone Icon'
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <h3 className='font-semibold text-blue-600'>
                  Dental 24H Emergency
                </h3>
                <p className='text-gray-700'>0900-78601</p>
              </div>
            </div>
          </div>

          <div className='hidden max-w-sm rounded-2xl border bg-white px-6 py-4 shadow-md'>
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
          </div>
        </div>

        <Image
          src='/images/hero-section.svg'
          alt='Hero Section Image'
          width={600}
          height={600}
        />
      </div>
    </div>
  )
}

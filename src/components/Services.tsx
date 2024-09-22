import Image from 'next/image'
import Icon from './Icon'
import LearnMoreButton from './LearnMoreButton'
import { servicesData } from '@/constants'
import Button from './Button'

export default function Services() {
  return (
    <div className='mx-auto max-w-6xl space-y-10 px-4 py-10 font-general-sans'>
      <section className='rounded-lg bg-light-blue pt-4 py-8 border '>
        <div className='grid grid-cols-3 place-items-center gap-4'>
          {servicesData.map((service, index) => (
            <div key={index} className='mx-5 my-8 flex flex-col justify-center'>
              <Icon src={service.icon} alt={`${service.title} icon`} />

              <div className='space-y-2 text-center'>
                <h3 className='mt-2 text-xl font-medium'>{service.title}</h3>
                <p className='mx-auto line-clamp-3 max-w-sm text-body-text'>
                  {service.description}
                </p>
                <LearnMoreButton />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section></section>

      <section className='px-4 py-10 pt-4'>
        <div className='flex items-center justify-between flex-col lg:flex-row gap-8'>
          <div className='flex flex-col space-y-7'>
            <h2 className='text-left text-4xl font-semibold leading-tight'>
              Leave Your Worries At The <br /> Door And Enjoy A Healthier, <br /> More Precise
              Smile
            </h2>

            <p className='max-w-lg text-body-text'>
              We use only the best quality materials on the market in order to
              provide the best products to our patients, So don’t worry about
              anything and book yourself.
            </p>

            <Button href='/book-appointment' text='Book an appointment' />
          </div>

          <Image src='/images/section-3.svg' alt='' width={450} height={450} />
        </div>
      </section>

      <section className='rounded-lg bg-light-blue px-3 py-6 pt-4'>
        <div className='max-w-full mx-auto flex justify-around py-8 lg:flex-row flex-col' >
          <Image
            src='/images/reasons-section.svg'
            alt=''
            width={400}
            height={400}
          />

          <div className='space-y-4 max-w-lg'>
            <h2 className='text-3xl font-semibold'>
              Why choose Smile for all your dental treatments?
            </h2>
            <p className='max-w-lg text-body-text'>
              We use only the best quality materials on the market in order to
              provide the best products to our patients, So don’t worry about
              anything and book yourself.
            </p>

            <div className='flex- flex-col space-y-4'>
              <div className='flex items-center gap-2'>
                <img
                  src='/icons/shield-done.svg'
                  alt='Shield Done Icon'
                  width={20}
                  height={20}
                />
                <p className='font-medium text-body-text'>
                  Top quality dental team
                </p>
              </div>

              <div className='flex items-center gap-2'>
                <img
                  src='/icons/shield-done.svg'
                  alt='Shield Done Icon'
                  width={20}
                  height={20}
                />
                <p className='font-medium text-body-text'>
                  State of the art dental services
                </p>
              </div>

              <div className='flex items-center gap-2'>
                <img
                  src='/icons/shield-done.svg'
                  alt='Shield Done Icon'
                  width={20}
                  height={20}
                />
                <p className='font-medium text-body-text'>
                  Discount on all dental treatment
                </p>
              </div>

              <div className='flex items-center gap-2'>
                <img
                  src='/icons/shield-done.svg'
                  alt='Shield Done Icon'
                  width={20}
                  height={20}
                />
                <p className='font-medium text-body-text'>
                  Enrollment is quick and easy
                </p>
              </div>
            </div>

            <div className='py-4'>
              <Button href='/book-appointment' text='Book an appointment' />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

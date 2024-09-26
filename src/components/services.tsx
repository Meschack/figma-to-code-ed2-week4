import Image from 'next/image'
import Icon from './icon'
import { servicesData } from '@/data'
import { Wrapper } from './common/wrapper'
import { LearnMoreButton } from './learn-more-button'
import { Button } from './common/button'
import Link from 'next/link'
import { Icons } from './common/icons'

const reasons = [
  'Top quality dental team',
  'State of the art dental services',
  'Discount on all dental treatment',
  'Enrollment is quick and easy'
]

export const Services = () => {
  return (
    <Wrapper className='space-y-10'>
      <section className='rounded-lg bg-light-blue p-4'>
        <div className='flex flex-col gap-4 overflow-x-auto lg:flex-row'>
          {servicesData.map((service, index) => (
            <div
              key={index}
              className='flex flex-col justify-center rounded-md bg-white p-4'
            >
              <Icon src={service.icon} alt={`${service.title} icon`} />

              <div className='space-y-2 text-center'>
                <h3 className='mt-2 whitespace-nowrap text-xl font-medium'>
                  {service.title}
                </h3>

                <p className='mx-auto line-clamp-3 max-w-sm text-body-text'>
                  {service.description}
                </p>

                <LearnMoreButton />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className='px-4 py-10 pt-4'>
        <div className='flex flex-col-reverse items-center justify-between gap-8 lg:flex-row'>
          <div className='flex flex-col space-y-7'>
            <h2 className='text-left text-4xl font-semibold leading-tight'>
              Leave Your Worries At The Door And Enjoy A Healthier, More Precise
              Smile
            </h2>

            <p className='max-w-lg text-body-text'>
              We use only the best quality materials on the market in order to
              provide the best products to our patients, So don’t worry about
              anything and book yourself.
            </p>

            <Button asChild className='w-fit'>
              <Link href='/booking'>Book an appointment</Link>
            </Button>
          </div>

          <Image src='/images/section-3.svg' alt='' width={450} height={450} />
        </div>
      </section>

      <section className='rounded-lg bg-light-blue px-3 py-6 pt-4'>
        <div className='mx-auto flex max-w-full flex-col justify-around gap-8 px-2 py-8 lg:flex-row'>
          <Image
            src='/images/reasons-section.svg'
            alt=''
            width={400}
            height={400}
            className='mx-auto'
          />

          <div className='mx-auto max-w-lg space-y-4'>
            <h2 className='text-3xl font-semibold'>
              Why choose Smile for all your dental treatments?
            </h2>
            <p className='max-w-lg text-body-text'>
              We use only the best quality materials on the market in order to
              provide the best products to our patients, So don’t worry about
              anything and book yourself.
            </p>

            <ul className='flex- flex-col space-y-4'>
              {reasons.map((reason, index) => (
                <li key={index} className='flex items-center gap-2'>
                  <Icons.shieldDone />
                  <p className='font-medium text-body-text'>{reason}</p>
                </li>
              ))}
            </ul>

            <div className='py-4'>
              <Button asChild className='w-fit'>
                <Link href='/booking'>Book an appointment</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  )
}

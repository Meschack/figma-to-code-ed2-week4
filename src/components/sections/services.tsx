import Image from 'next/image'
import { servicesData } from '@/data'
import { Wrapper } from '../common/wrapper'
import { LearnMoreButton } from '../ui/learn-more-button'
import { Button } from '../common/button'
import { Icons } from '../common/icons'
import reasonSection from '@@/images/reasons-section.png'
import proHelp from '@@/images/pro-help.png'

const reasons = [
  'Highly experienced and specialized medical team',
  'Advanced technology and state-of-the-art facilities',
  'Exclusive discounts on select treatments and services',
  'Simple and quick enrollment process for new patients'
]

export const Services = () => {
  return (
    <Wrapper className='space-y-10 pb-10'>
      <section className='rounded-lg bg-light-blue p-4'>
        <div className='flex flex-col gap-4 overflow-x-auto lg:flex-row'>
          {servicesData.map((service, index) => (
            <div
              key={index}
              className='flex flex-col items-center justify-center rounded-md bg-white p-4'
            >
              <div className='mx-auto max-w-max rounded-full border bg-sky-blue p-3'>
                <service.icon />
              </div>

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
              Experience Exceptional Care and Personalized Solutions
            </h2>

            <p className='max-w-lg text-body-text'>
              We take pride in using top-quality materials and advanced
              techniques to deliver outstanding results. Let us handle the
              details while you enjoy a smooth and stress-free experience.
            </p>

            <Button asChild className='w-fit'>
              <a href='/booking'>Book an appointment</a>
            </Button>
          </div>

          <Image src={proHelp} alt='Find help' width={450} height={450} />
        </div>
      </section>

      <section className='rounded-lg bg-light-blue px-3 py-6 pt-4'>
        <div className='mx-auto flex max-w-full flex-col justify-around gap-8 px-2 py-8 lg:flex-row'>
          <Image
            src={reasonSection}
            alt='Reason section'
            width={400}
            height={400}
            className='mx-auto'
          />

          <div className='mx-auto max-w-lg space-y-4'>
            <h2 className='text-3xl font-semibold'>
              Why choose us for your medical treatments?
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
                <a href='/booking'>Book an appointment</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  )
}

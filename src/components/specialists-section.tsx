'use client'
<<<<<<< HEAD
import { useRef } from 'react'
import SpecialistCard from './specialist-card'
import { specialists } from '../data'
import { Icons } from './common/icons'

export const SpecialistsSection = () => {
=======
import Image from 'next/image'
import { FC, useRef } from 'react'
import SpecialistCard from './specialist-card'
import { specialists } from '../data'

const SpecialistsSection: FC = () => {
>>>>>>> 7ee8c05 (feat: complete initial version of landing page (non-responsive) ✅​)
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: number) => {
    if (scrollRef.current) {
<<<<<<< HEAD
      scrollRef.current.scrollBy({ left: direction * 300, behavior: 'smooth' })
=======
      scrollRef.current.scrollBy({
        left: direction * 300,
        behavior: 'smooth'
      })
>>>>>>> 7ee8c05 (feat: complete initial version of landing page (non-responsive) ✅​)
    }
  }

  return (
    <section className='bg-light-blue py-12'>
      <div className='mx-auto max-w-7xl px-4 font-general-sans'>
        <div className='mb-8 text-center'>
          <h2 className='text-4xl font-semibold'>
            Meet Our <span className='text-primary-blue'>Specialists</span>
          </h2>
          <p className='mt-2 text-body-text'>
            We use only the best quality materials on the market in <br /> order
            to provide the best products to our patients.
          </p>
        </div>

        <div className='relative'>
          <div
            ref={scrollRef}
            className='scrollbar-hide flex space-x-6 overflow-x-auto scroll-smooth p-4 transition-all duration-500 ease-in-out'
            style={{ scrollSnapType: 'x mandatory', scrollSnapAlign: 'center' }}
          >
            {specialists.map((specialist, index) => (
              <div
                key={index}
                className='flex-shrink-0'
                style={{ scrollSnapAlign: 'center' }}
              >
                <SpecialistCard {...specialist} />
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll(-1)}
<<<<<<< HEAD
            className='absolute left-0 top-1/2 -translate-y-1/2 transform rounded-full bg-white p-2 shadow-md hover:bg-gray-200'
            aria-label='Scroll left'
          >
            <Icons.arrowLeft />
=======
            className='absolute left-0 top-1/2 -translate-y-1/2 transform rounded-full bg-white p-2.5 shadow-md hover:bg-gray-200'
            aria-label='Scroll left'
          >
            <Image
              src='/icons/arrow-right-icon.svg'
              alt='Previous'
              width={26}
              height={26}
              className='rotate-180'
            />
>>>>>>> 7ee8c05 (feat: complete initial version of landing page (non-responsive) ✅​)
          </button>

          <button
            onClick={() => scroll(1)}
<<<<<<< HEAD
            className='absolute right-0 top-1/2 -translate-y-1/2 transform rounded-full bg-white p-2 shadow-md hover:bg-gray-200'
            aria-label='Scroll right'
          >
            <Icons.arrowRight />
=======
            className='absolute right-0 top-1/2 -translate-y-1/2 transform rounded-full bg-white p-2.5 shadow-md hover:bg-gray-200'
            aria-label='Scroll right'
          >
            <Image
              src='/icons/arrow-right-icon.svg'
              alt='Next'
              width={26}
              height={26}
            />
>>>>>>> 7ee8c05 (feat: complete initial version of landing page (non-responsive) ✅​)
          </button>
        </div>
      </div>
    </section>
  )
}
<<<<<<< HEAD
=======

export default SpecialistsSection
>>>>>>> 7ee8c05 (feat: complete initial version of landing page (non-responsive) ✅​)

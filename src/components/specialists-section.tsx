'use client'
import { useRef } from 'react'
import SpecialistCard from './specialist-card'
import { specialists } from '../data'
import { Icons } from './common/icons'

export const SpecialistsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction * 300, behavior: 'smooth' })
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
            className='absolute left-0 top-1/2 -translate-y-1/2 transform rounded-full bg-white p-2 shadow-md hover:bg-gray-200'
            aria-label='Scroll left'
          >
            <Icons.arrowLeft />
          </button>

          <button
            onClick={() => scroll(1)}
            className='absolute right-0 top-1/2 -translate-y-1/2 transform rounded-full bg-white p-2 shadow-md hover:bg-gray-200'
            aria-label='Scroll right'
          >
            <Icons.arrowRight />
          </button>
        </div>
      </div>
    </section>
  )
}

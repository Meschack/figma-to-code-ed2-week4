'use client';
import Image from 'next/image';
import { FC, useRef } from 'react';
import SpecialistCard from './specialist-card';
import { specialists } from '../data'; 

const SpecialistsSection: FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction * 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-12 bg-light-blue">
      <div className="max-w-7xl mx-auto px-4 font-general-sans">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-semibold">
            Meet Our <span className="text-primary-blue">Specialists</span>
          </h2>
          <p className="text-body-text mt-2">
            We use only the best quality materials on the market in <br /> order to provide the best products to our patients.
          </p>
        </div>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto scroll-smooth p-4 transition-all duration-500 ease-in-out scrollbar-hide"
            style={{ scrollSnapType: 'x mandatory', scrollSnapAlign: 'center' }}
          >
            {specialists.map((specialist, index) => (
              <div key={index} className="flex-shrink-0" style={{ scrollSnapAlign: 'center' }}>
                <SpecialistCard {...specialist} />
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll(-1)}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-gray-200"
            aria-label="Scroll left"
          >
            <Image src="/icons/arrow-left.svg" alt="Previous" width={24} height={24} />
          </button>
          <button
            onClick={() => scroll(1)}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-gray-200"
            aria-label="Scroll right"
          >
            <Image src="/icons/arrow-right.svg" alt="Next" width={24} height={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SpecialistsSection;

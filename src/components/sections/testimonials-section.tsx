'use client'
import { useEffect, useRef } from 'react'
import { testimonials } from '@/data'
import { StarRating } from '../ui/star-rating'

export const TestimonialsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const cardWidth = 300 // Largeur d'une card, ici 300px

  useEffect(() => {
    const scrollContainer = scrollRef.current

    if (scrollContainer) {
      // Dupliquer les témoignages pour un défilement infini
      const totalScrollWidth = scrollContainer.scrollWidth / 2 // Moitié du contenu total

      const scrollInterval = setInterval(() => {
        // Vérifie si on atteint la fin du premier set
        if (scrollContainer.scrollLeft >= totalScrollWidth) {
          // Cache la transition pour éviter le clignotement, puis réinitialise la position
          scrollContainer.style.transition = 'none'
          scrollContainer.scrollLeft = 0
        } else {
          // Continue de défiler de manière fluide
          scrollContainer.style.transition = 'all 0.3s ease-in-out'
          scrollContainer.scrollBy({ left: cardWidth, behavior: 'smooth' })
        }
      }, 3000) // 3 secondes pour chaque scroll automatique

      return () => clearInterval(scrollInterval) // Nettoyer l'intervalle lorsque le composant est démonté
    }
  }, [])

  // On duplique les témoignages pour créer l'effet d'infinité
  const duplicatedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
    ...testimonials
  ]

  return (
    <section>
      <div className='mb-8 space-y-2 pt-8 text-center'>
        <h2 className='text-4xl font-semibold'>
          Our <span className='text-primary-blue'>Happy Clients</span>
        </h2>
        <p className='mt-2 px-4 text-body-text'>
          We use only the best quality materials on the market in order to
          provide the best products to our patients.
        </p>
      </div>

      <div className='relative pb-5'>
        <div
          ref={scrollRef}
          className='scrollbar-hide flex space-x-6 overflow-x-auto py-6'
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className='min-w-[300px] max-w-sm flex-shrink-0 rounded-lg bg-white p-6 shadow-md'
            >
              <div className='flex items-center gap-3'>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className='h-14 w-14 rounded-full'
                />
                <div className='flex flex-col justify-center gap-1'>
                  <h3 className='text-lg font-medium text-body-text'>
                    {testimonial.name}
                  </h3>
                  <StarRating rating={testimonial.rating} />
                </div>
              </div>
              <p className='pt-2 text-base text-body-text'>
                {testimonial.message}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

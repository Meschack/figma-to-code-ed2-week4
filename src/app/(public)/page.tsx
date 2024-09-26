import { CTASection } from '@/components/sections/cta-section'
import { HeroSection } from '@/components/sections/hero-section'
import { Services } from '@/components/sections/services'
import { SpecialistsSection } from '@/components/specialists/specialists-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'

const Home = () => {
  return (
    <>
      <HeroSection />
      <Services />
      <SpecialistsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}

export default Home

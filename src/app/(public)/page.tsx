import { CTASection } from '@/components/cta-section'
import { HeroSection } from '@/components/hero-section'
import { Services } from '@/components/services'
import { SpecialistsSection } from '@/components/specialists-section'
import { TestimonialsSection } from '@/components/testimonials-section'

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

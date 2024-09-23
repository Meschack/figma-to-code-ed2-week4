import { CTASection } from '@/components/cta-section'
import { Footer } from '@/components/footer'
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
      <Footer />
    </>
  )
}

export default Home

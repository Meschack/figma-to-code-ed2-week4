import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import Services from "@/components/services"
import SpecialistsSection from "@/components/specialists-section"
import TestimonialsSection from "@/components/testimonials-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"
export default function Home() {
  return (
    <>  
      <Header />
      <HeroSection/>
      <Services/>
      <SpecialistsSection/>
      <TestimonialsSection/>
      <CTASection/>
      <Footer/>
    </>
  )
}

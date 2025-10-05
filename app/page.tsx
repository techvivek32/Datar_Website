import Hero from "@/components/hero"
import About from "@/components/about"
import ProgramsGrid from "@/components/programs-grid"
import CorporateTraining from "@/components/corporate-training"
import UspStats from "@/components/usp-stats"
import Testimonials from "@/components/testimonials"
import CtaBanner from "@/components/cta-banner"
import ContactSection from "@/components/contact-section"

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <ProgramsGrid />
      <CorporateTraining />
      <UspStats />
      <Testimonials />
      <CtaBanner />
      <ContactSection />
    </>
  )
}
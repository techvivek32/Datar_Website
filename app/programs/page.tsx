import ProgramsGrid from "@/components/programs-grid"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Page() {
  return (
    <section className="px-6 py-12 md:py-16">
      <div className="mx-auto max-w-6xl space-y-10">
        <header className="space-y-3">
          <h1 className="heading-font text-3xl md:text-4xl font-semibold">Programs & Courses</h1>
          <p className="leading-relaxed md:max-w-3xl">
            Practical, cohort-style programs designed for Indian professionals, campuses, and teams. Each course blends
            live workshops with hands-on assignments and feedback.
          </p>
        </header>

        <ProgramsGrid />

        <section aria-labelledby="faq" className="pt-4">
          <h2 id="faq" className="heading-font text-2xl font-semibold mb-4">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="format">
              <AccordionTrigger>What’s the format and duration?</AccordionTrigger>
              <AccordionContent>
                Most programs run 2–6 weeks with weekly live sessions, practice labs, and mentor feedback. Corporate
                intensives can be designed as 1–3 day workshops.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="certificate">
              <AccordionTrigger>Do I get a certificate?</AccordionTrigger>
              <AccordionContent>
                Yes, a completion certificate is issued upon meeting participation and assignment criteria.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="corporate">
              <AccordionTrigger>Can these be customized for our company?</AccordionTrigger>
              <AccordionContent>
                Absolutely. We tailor case studies, examples, and simulations to your industry and team goals.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </div>
    </section>
  )
}

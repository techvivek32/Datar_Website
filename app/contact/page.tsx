import ContactSection from "@/components/contact-section"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Page() {
  return (
    <section className="px-6 py-12 md:py-16">
      <div className="mx-auto max-w-6xl space-y-10">
        <ContactSection />

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg ring-1 ring-border p-4 bg-card">
            <h2 className="heading-font text-lg font-semibold mb-2">Locations</h2>
            <p className="text-sm leading-relaxed">
              Bengaluru, Mumbai, Delhi-NCR. Remote workshops available across India.
            </p>
          </div>
          <div className="rounded-lg ring-1 ring-border p-4 bg-card">
            <h2 className="heading-font text-lg font-semibold mb-2">Office hours</h2>
            <p className="text-sm leading-relaxed">Mon–Fri: 9:00–18:00 IST</p>
            <p className="text-sm leading-relaxed">Weekends by appointment</p>
          </div>
          <div className="rounded-lg ring-1 ring-border p-4 bg-card">
            <h2 className="heading-font text-lg font-semibold mb-2">Quick chat</h2>
            <a
              href="https://wa.me/0000000000"
              className="inline-block mt-1 px-3 py-2 rounded-md bg-accent text-accent-foreground text-sm"
            >
              WhatsApp now
            </a>
          </div>
        </div>

        <section aria-labelledby="contact-faq">
          <h2 id="contact-faq" className="heading-font text-2xl font-semibold mb-3">
            Contact FAQ
          </h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="response">
              <AccordionTrigger>How fast do you respond?</AccordionTrigger>
              <AccordionContent>Within 24 hours on business days.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="proposal">
              <AccordionTrigger>Do you provide a proposal?</AccordionTrigger>
              <AccordionContent>Yes, after a discovery call, we share a tailored plan and quote.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </div>
    </section>
  )
}

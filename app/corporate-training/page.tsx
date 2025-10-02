import CorporateTraining from "@/components/corporate-training"

export default function Page() {
  return (
    <section className="px-6 py-12 md:py-16">
      <div className="mx-auto max-w-6xl space-y-10">
        <CorporateTraining />
        <section className="grid gap-6 md:grid-cols-3">
          <div>
            <h2 className="heading-font text-xl font-semibold mb-2">Training formats</h2>
            <ul className="list-disc pl-6 leading-relaxed">
              <li>Onsite workshops (1–3 days)</li>
              <li>Virtual cohorts (2–6 weeks)</li>
              <li>Leadership offsites and retreats</li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h2 className="heading-font text-xl font-semibold mb-2">Trusted by</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="h-14 rounded-md bg-secondary" aria-label="Client logo placeholder" />
              <div className="h-14 rounded-md bg-secondary" aria-label="Client logo placeholder" />
              <div className="h-14 rounded-md bg-secondary" aria-label="Client logo placeholder" />
              <div className="h-14 rounded-md bg-secondary" aria-label="Client logo placeholder" />
            </div>
          </div>
        </section>

        <div>
          <a href="/contact" className="inline-block px-4 py-2 rounded-md bg-accent text-accent-foreground">
            Book a discovery call
          </a>
        </div>
      </div>
    </section>
  )
}

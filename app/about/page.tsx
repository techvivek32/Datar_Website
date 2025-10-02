import About from "@/components/about"

export default function Page() {
  return (
    <section className="px-6 py-12 md:py-16">
      <div className="mx-auto max-w-6xl space-y-10">
        <About />
        <section className="grid gap-8 md:grid-cols-2">
          <div className="space-y-3">
            <h2 className="heading-font text-2xl font-semibold">Our Approach</h2>
            <ul className="list-disc pl-6 leading-relaxed">
              <li>Practice-first sessions with real scenarios</li>
              <li>Actionable frameworks, not theory dumps</li>
              <li>Personalized feedback and accountability</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h2 className="heading-font text-2xl font-semibold">Why choose us</h2>
            <ul className="list-disc pl-6 leading-relaxed">
              <li>Indian context with global best practices</li>
              <li>Trainer experience across startups and enterprises</li>
              <li>Proven outcomes measured by role KPIs</li>
            </ul>
          </div>
        </section>
      </div>
    </section>
  )
}

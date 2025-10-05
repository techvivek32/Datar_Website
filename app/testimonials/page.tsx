import Testimonials from "@/components/testimonials"

export default function Page() {
  return (
    <section className="px-6 py-12 md:py-16">
      <div className="mx-auto max-w-6xl space-y-8">
        <header className="space-y-2">
          <h1 className="heading-font text-3xl md:text-4xl font-semibold">Testimonials</h1>
          <p className="leading-relaxed md:max-w-3xl">
            Stories from professionals, campuses, and teams who transformed their outcomes.
          </p>
        </header>
        <Testimonials />
        <div>
          <a href="/contact" className="inline-block px-4 py-2 rounded-md bg-primary text-primary-foreground">
            Submit your story
          </a>
        </div>
      </div>
    </section>
  )
}

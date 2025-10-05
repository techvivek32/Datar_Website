import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const industries = ["IT", "Finance", "Healthcare", "Manufacturing", "Education", "Start-ups"]

export default function CorporateTraining() {
  return (
    <section className="px-6 py-12 md:py-16 bg-secondary">
      <div className="mx-auto max-w-6xl space-y-6">
        <h2 className="heading-font text-3xl md:text-4xl font-semibold">Corporate Training</h2>
        <p className="max-w-3xl leading-relaxed">
          Custom B2B solutions tailored for teams and leadership cohorts. We co-design learning journeys that align to
          business goals and deliver measurable outcomes.
        </p>

        <div className="flex flex-wrap gap-3">
          {industries.map((name) => {
            const slug = name.toLowerCase().replace(/\s+/g, "-")
            return (
              <Link
                key={name}
                href={`/industries/${slug}`}
                aria-label={`Explore ${name} training`}
                className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                {name}
              </Link>
            )
          })}
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <Card key={i} className="ring-1 ring-border">
              <CardHeader>
                <CardTitle className="heading-font">Client Testimonial</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed">
                  “Engaging, practical, and impactful. Our teams saw immediate improvement.”
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

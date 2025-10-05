import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const industries = [
  { name: "IT", slug: "it", blurb: "Agile collaboration, stakeholder updates, tech-to-business storytelling." },
  {
    name: "Finance",
    slug: "finance",
    blurb: "Executive-ready communication, risk mindset, and client-facing clarity.",
  },
  { name: "Healthcare", slug: "healthcare", blurb: "Empathy, teamwork, accurate documentation, and safe handoffs." },
  {
    name: "Manufacturing",
    slug: "manufacturing",
    blurb: "Shop-floor communication, Lean habits, and safety briefings.",
  },
  {
    name: "Education",
    slug: "education",
    blurb: "Engaging delivery, feedback culture, and modern classroom practices.",
  },
  { name: "Start-ups", slug: "start-ups", blurb: "Pitching, cross-functional alignment, and fast execution rituals." },
]

export default function IndustriesIndexPage() {
  return (
    <main className="px-6 py-12 md:py-16">
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="space-y-2">
          <h1 className="heading-font text-3xl md:text-4xl font-semibold text-balance">Industries We Serve</h1>
          <p className="max-w-3xl leading-relaxed opacity-90">
            Tailored programs that map to real workflows and outcomes. Explore your industry to see sample modules,
            formats, and measurable results.
          </p>
        </header>

        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((i) => (
            <Card key={i.slug} className="ring-1 ring-border">
              <CardHeader>
                <CardTitle className="heading-font">{i.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="leading-relaxed opacity-90">{i.blurb}</p>
                <Link
                  href={`/industries/${i.slug}`}
                  className="inline-flex items-center justify-center rounded-md px-3 py-2 bg-primary text-primary-foreground text-sm hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  aria-label={`Explore ${i.name} industry training`}
                >
                  Explore {i.name}
                </Link>
              </CardContent>
            </Card>
          ))}
        </section>
      </div>
    </main>
  )
}

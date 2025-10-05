import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const programs = [
  {
    title: "Communication & Soft Skills",
    desc: "Master presentations, storytelling, and interpersonal skills.",
    slug: "communication-soft-skills",
  },
  {
    title: "Leadership & Team Building",
    desc: "Develop high-trust leadership and collaborative teams.",
    slug: "leadership-team-building",
  },
  {
    title: "Time Management & Productivity",
    desc: "Tools and rituals to focus, prioritize, and deliver.",
    slug: "time-management-productivity",
  },
  {
    title: "Interview & Resume Skills",
    desc: "Designed for freshers to stand out and get hired.",
    slug: "interview-resume-skills",
  },
]

export default function ProgramsGrid() {
  return (
    <section className="px-6 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="heading-font text-3xl md:text-4xl font-semibold mb-6">Programs & Courses</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {programs.map((p) => (
            <Card key={p.title} className="ring-1 ring-border">
              <CardHeader>
                <CardTitle className="heading-font">{p.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="leading-relaxed">{p.desc}</p>
                <Button className="bg-primary text-primary-foreground" asChild>
                  <Link href={`/programs/${p.slug}`}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

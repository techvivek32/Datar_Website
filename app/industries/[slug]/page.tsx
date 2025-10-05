import Link from "next/link"
import { notFound } from "next/navigation"

type IndustryContent = {
  title: string
  overview: string
  needs: string[]
  modules: string[]
  outcomes: string[]
}

const DATA: Record<string, IndustryContent> = {
  it: {
    title: "IT",
    overview:
      "Enable engineering and product teams to communicate clearly, collaborate across functions, and ship with confidence.",
    needs: [
      "Agile ceremonies that create focus and accountability",
      "Stakeholder updates that translate tech to business impact",
      "Cross-functional collaboration (PM–Design–Eng)",
    ],
    modules: [
      "Effective Agile ceremonies (planning, standups, reviews)",
      "Tech-to-business storytelling and stakeholder updates",
      "Cross-functional collaboration and conflict resolution",
      "Presentation skills for demos and executive reviews",
    ],
    outcomes: [
      "Fewer meeting overruns and clearer action ownership",
      "Faster decisions due to crisp executive-ready updates",
      "Better demo quality and cross-team alignment",
    ],
  },
  finance: {
    title: "Finance",
    overview:
      "Strengthen client communication, compliance mindset, and executive-ready presentations in high-stakes contexts.",
    needs: [
      "Structured communication under time pressure",
      "Risk and compliance culture in day-to-day behaviors",
      "Clear written and verbal updates for senior leaders",
    ],
    modules: [
      "Executive-ready structuring (pyramids, key messages)",
      "Risk, controls, and compliance communications",
      "Visual clarity for financial presentations",
      "Time-boxing and prioritization rituals",
    ],
    outcomes: [
      "Sharper client and stakeholder conversations",
      "Reduced errors via consistent documentation practices",
      "Higher confidence in leadership reviews",
    ],
  },
  healthcare: {
    title: "Healthcare",
    overview: "Improve patient experience and care coordination with empathy, teamwork, and precise documentation.",
    needs: [
      "Empathetic patient interactions and trust-building",
      "Clear handoffs and inter-department coordination",
      "Accurate, concise documentation",
    ],
    modules: [
      "Empathy and active listening in clinical contexts",
      "Team communication and safe handoffs",
      "Documentation that supports speed and accuracy",
      "Managing stress and difficult conversations",
    ],
    outcomes: [
      "Better patient satisfaction and clarity",
      "Fewer handoff-related delays or errors",
      "More consistent documentation quality",
    ],
  },
  manufacturing: {
    title: "Manufacturing",
    overview: "Build a culture of safety, Lean habits, and on-time delivery through practical communication rituals.",
    needs: [
      "Shop-floor communication and shift handovers",
      "Safety briefings that people remember",
      "Daily accountability and problem-solving",
    ],
    modules: [
      "Effective daily standups (SQDC boards, Tier meetings)",
      "Safety storytelling and briefings that stick",
      "Root-cause analysis communication (5 Whys, A3)",
      "Lean visual management and feedback loops",
    ],
    outcomes: [
      "Improved on-time performance and fewer reworks",
      "Stronger safety culture and awareness",
      "Faster escalation and resolution cycles",
    ],
  },
  education: {
    title: "Education",
    overview: "Elevate teaching delivery, student engagement, and feedback culture for modern classrooms.",
    needs: [
      "Engaging delivery with clear outcomes",
      "Feedback that drives learning and confidence",
      "Collaborative projects and soft skills",
    ],
    modules: [
      "Active learning techniques and engagement",
      "Constructive feedback and assessment practices",
      "Presentation and group collaboration skills",
      "Curriculum storytelling and clarity",
    ],
    outcomes: [
      "Higher student participation and confidence",
      "Clearer learning outcomes and assessments",
      "Improved teamwork and communication",
    ],
  },
  "start-ups": {
    title: "Start-ups",
    overview: "Align fast-moving teams around crisp pitches, clear priorities, and strong collaboration.",
    needs: [
      "Investor and customer pitching with clarity",
      "Cross-functional alignment under ambiguity",
      "Hiring, onboarding, and manager basics",
    ],
    modules: [
      "Pitch structure and narrative for demos and fund-raising",
      "Goal-setting and weekly execution rhythms",
      "Decision-making and conflict resolution",
      "Hiring and onboarding communication",
    ],
    outcomes: [
      "Sharper pitches and faster decisions",
      "Reduced thrash and better execution velocity",
      "Stronger onboarding and team cohesion",
    ],
  },
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const data = DATA[params.slug]
  if (!data) return notFound()

  return (
    <main className="px-6 py-12 md:py-16">
      <div className="mx-auto max-w-6xl space-y-8">
        <header className="space-y-2">
          <h1 className="heading-font text-3xl md:text-4xl font-semibold text-balance">{data.title} Training</h1>
          <p className="max-w-3xl leading-relaxed opacity-90">{data.overview}</p>
        </header>

        <section className="grid gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <h2 className="heading-font text-xl font-semibold">Common Needs</h2>
            <ul className="list-disc pl-5 space-y-1">
              {data.needs.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-3 md:col-span-2">
            <h2 className="heading-font text-xl font-semibold">Sample Modules</h2>
            <ul className="grid gap-2 md:grid-cols-2">
              {data.modules.map((m) => (
                <li key={m} className="rounded-md ring-1 ring-border p-3">
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="heading-font text-xl font-semibold">Outcomes</h2>
          <ul className="list-disc pl-5 space-y-1">
            {data.outcomes.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
        </section>

        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md px-4 py-2 bg-primary text-primary-foreground text-sm hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            aria-label="Contact us about corporate training"
          >
            Discuss your training needs
          </Link>
        </div>
      </div>
    </main>
  )
}

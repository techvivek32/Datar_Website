import { notFound } from "next/navigation"

const PROGRAMS: Record<string, { title: string; intro: string; bullets: string[]; cta: string }> = {
  "communication-soft-skills": {
    title: "Communication & Soft Skills",
    intro:
      "Master presentations, storytelling, and interpersonal skills with practical, scenario-driven exercises tailored for Indian workplaces.",
    bullets: [
      "Structuring persuasive presentations",
      "Storytelling frameworks for business",
      "Interpersonal empathy and active listening",
      "Conflict resolution and feedback delivery",
    ],
    cta: "Enroll in Communication & Soft Skills",
  },
  "leadership-team-building": {
    title: "Leadership & Team Building",
    intro: "Develop high-trust leadership habits and build collaborative, accountable teams.",
    bullets: [
      "Leadership mindsets and decision-making",
      "Delegation and accountability rituals",
      "Psychological safety and trust",
      "Facilitating effective team meetings",
    ],
    cta: "Start Leadership & Team Building",
  },
  "time-management-productivity": {
    title: "Time Management & Productivity",
    intro: "Tools and rituals to focus, prioritize, and deliver consistently.",
    bullets: [
      "Prioritization frameworks (Eisenhower, MoSCoW)",
      "Weekly and daily planning systems",
      "Focus strategies and distraction management",
      "Retrospectives and continuous improvement",
    ],
    cta: "Improve Your Productivity",
  },
  "interview-resume-skills": {
    title: "Interview & Resume Skills",
    intro: "Designed for freshers to stand out and get hired with confidence.",
    bullets: [
      "Resume structuring and accomplishment bullets",
      "ATS-friendly formatting",
      "Mock interviews and feedback",
      "Portfolio and LinkedIn optimization",
    ],
    cta: "Prepare for Interviews",
  },
}

export default function Page({ params }: { params: { slug: string } }) {
  const data = PROGRAMS[params.slug]
  if (!data) return notFound()

  return (
    <section className="px-6 py-12 md:py-16">
      <div className="mx-auto max-w-3xl space-y-8">
        <h1 className="heading-font text-3xl md:text-4xl font-semibold">{data.title}</h1>
        <p className="leading-relaxed">{data.intro}</p>
        <ul className="grid gap-2 list-disc pl-6">
          {data.bullets.map((b) => (
            <li key={b} className="leading-relaxed">
              {b}
            </li>
          ))}
        </ul>

        {/* extra details */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <h3 className="heading-font text-xl font-semibold">Who it’s for</h3>
            <ul className="list-disc pl-6 leading-relaxed">
              <li>Working professionals aiming to level up</li>
              <li>Early-career graduates and freshers</li>
              <li>Managers mentoring new team members</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="heading-font text-xl font-semibold">Format & Duration</h3>
            <ul className="list-disc pl-6 leading-relaxed">
              <li>Live weekly workshops + practice labs</li>
              <li>Assignments with personalized feedback</li>
              <li>Typical duration: 2–6 weeks (customizable)</li>
            </ul>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="heading-font text-xl font-semibold">Syllabus Preview</h3>
          <ol className="list-decimal pl-6 leading-relaxed">
            <li>Foundations and core frameworks</li>
            <li>Skills practice with real-world scenarios</li>
            <li>Feedback and iteration</li>
            <li>Final project and review</li>
          </ol>
        </div>

        <a
          href="/contact"
          className="inline-block px-4 py-2 rounded-md bg-primary text-primary-foreground"
          aria-label={`${data.cta} - contact form`}
        >
          {data.cta}
        </a>
      </div>
    </section>
  )
}

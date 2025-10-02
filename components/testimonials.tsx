export default function Testimonials() {
  return (
    <section className="px-6 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="heading-font text-3xl md:text-4xl font-semibold mb-6">Success Stories</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            "I cracked my interviews with confidence thanks to Dr. Mahesh's guidance. — Recent Graduate",
            "Mr. Sudesh's leadership trainings improved our team outcomes significantly. — HR Partner",
            "DATAR Training provides practical tools we use every day. — Manager, IT",
          ].map((quote) => (
            <figure key={quote} className="p-5 rounded-lg bg-secondary">
              <blockquote className="leading-relaxed">{quote}</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
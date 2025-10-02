const stats = [
  { label: "Years Experience", value: "10+" },
  { label: "Professionals Trained", value: "2000+" },
  { label: "Workshops Delivered", value: "300+" },
  { label: "Cities Across India", value: "20+" },
]

export default function UspStats() {
  return (
    <section className="px-6 py-10">
      <div className="mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="p-4 rounded-lg bg-card ring-1 ring-border text-center">
            <div className="heading-font text-3xl font-semibold">{s.value}</div>
            <div className="text-sm opacity-80">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

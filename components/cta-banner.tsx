import { Button } from "@/components/ui/button"

export default function CtaBanner() {
  return (
    <section className="px-6 py-12">
      <div className="mx-auto max-w-6xl rounded-xl bg-primary text-primary-foreground p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="heading-font text-2xl md:text-3xl font-semibold text-balance">Ready to Upskill?</h3>
          <p className="opacity-90">Let’s plan a customized learning journey for you or your team.</p>
        </div>
        <Button variant="secondary" className="bg-accent text-accent-foreground">
          Get Started
        </Button>
      </div>
    </section>
  )
}

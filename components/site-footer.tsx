import Link from "next/link"

export default function SiteFooter() {
  return (
    <footer role="contentinfo" className="mt-16 border-t border-border bg-primary text-primary-foreground">
      <div className="relative pt-12 pb-10 px-6 overflow-hidden">
        {/* decorative overlay moved behind content and reduced opacity */}
        <div
          aria-hidden="true"
          className="mandala-overlay pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-10 -z-10"
        />
        <div className="relative mx-auto max-w-6xl grid gap-8 md:grid-cols-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-2">
              <img src="/datar-logo.svg" alt="DATAR Training" className="h-8 w-8" />
              <h4 className="heading-font text-xl font-semibold text-primary-foreground">DATAR Training</h4>
            </div>
            <p className="text-sm leading-relaxed">
              Professional training and coaching for individuals and teams across India by Dr. Mahesh Vasoya and Mr. Sudesh Aggrawal.
            </p>
          </div>

          <nav aria-label="Footer" className="text-sm">
            <h5 className="heading-font font-semibold mb-2">Quick links</h5>
            <ul className="grid gap-2">
              <li>
                <Link href="/about" className="underline underline-offset-4 hover:opacity-90">
                  About
                </Link>
              </li>
              <li>
                <Link href="/programs" className="underline underline-offset-4 hover:opacity-90">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/corporate-training" className="underline underline-offset-4 hover:opacity-90">
                  Corporate Training
                </Link>
              </li>
              <li>
                <Link href="/contact" className="underline underline-offset-4 hover:opacity-90">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="underline underline-offset-4 hover:opacity-90">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </nav>

          <div className="text-sm">
            <h5 className="heading-font font-semibold mb-2">Programs</h5>
            <ul className="grid gap-2">
              <li>
                <Link
                  href="/programs/communication-soft-skills"
                  className="underline underline-offset-4 hover:opacity-90"
                >
                  Communication & Soft Skills
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/leadership-team-building"
                  className="underline underline-offset-4 hover:opacity-90"
                >
                  Leadership & Team Building
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/time-management-productivity"
                  className="underline underline-offset-4 hover:opacity-90"
                >
                  Time Management & Productivity
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/interview-resume-skills"
                  className="underline underline-offset-4 hover:opacity-90"
                >
                  Interview & Resume Skills
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-sm">
            <h5 className="heading-font font-semibold mb-2">Contact</h5>
            <ul className="grid gap-2">
              <li>Phone: +91-9054122224</li>
              <li>Email: mahesh@datartraining.com</li>
              <li>
                <a
                  href="https://wa.me/919054122224"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/70 focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded-sm"
                  aria-label="Open WhatsApp chat in new tab"
                >
                  WhatsApp
                </a>
              </li>
              <li className="pt-2 opacity-80">© {new Date().getFullYear()} DATAR Training Pvt. Ltd.</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
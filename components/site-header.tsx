"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/Datar Logo 01.png" alt="DATAR Training" className="h-11 w-auto" />
          <span className="heading-font font-semibold text-lg">DATAR Training</span>
          <span className="sr-only">Go to homepage</span>
        </Link>

        <nav aria-label="Main" className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/programs" className="hover:underline">
            Programs
          </Link>
          <Link href="/corporate-training" className="hover:underline">
            Corporate Training
          </Link>
          <Link href="/testimonials" className="hover:underline">
            Testimonials
          </Link>
          <Link href="/investment" className="hover:underline">
            Investment
          </Link>
          <Link href="/contact" className={cn("hover:underline text-accent-foreground px-3 py-1 rounded-md bg-accent")}>
            Contact
          </Link>
          <a
            href="https://wa.me/919054122224"
            target="_blank"
            rel="noopener noreferrer"
            className={cn("px-3 py-1 rounded-md bg-primary text-primary-foreground hover:opacity-90")}
            aria-label="Chat on WhatsApp (opens in new tab)"
          >
            WhatsApp
          </a>
        </nav>

        <Button
          variant="outline"
          className="md:hidden bg-transparent"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </Button>
      </div>

      <div id="mobile-menu" hidden={!open} className="md:hidden border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-3 grid gap-3 text-sm">
          <Link href="/about" onClick={() => setOpen(false)} className="hover:underline">
            About
          </Link>
          <Link href="/programs" onClick={() => setOpen(false)} className="hover:underline">
            Programs
          </Link>
          <Link href="/corporate-training" onClick={() => setOpen(false)} className="hover:underline">
            Corporate Training
          </Link>
          <Link href="/testimonials" onClick={() => setOpen(false)} className="hover:underline">
            Testimonials
          </Link>
          <Link href="/investment" onClick={() => setOpen(false)} className="hover:underline">
            Investment
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="hover:underline">
            Contact
          </Link>
          <a
            href="https://wa.me/919054122224"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="inline-block mt-1 px-3 py-2 rounded-md bg-accent text-accent-foreground text-sm"
            aria-label="Chat on WhatsApp (opens in new tab)"
          >
            WhatsApp now
          </a>
        </div>
      </div>
    </header>
  )
}
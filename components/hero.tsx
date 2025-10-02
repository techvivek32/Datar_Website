"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="heading-font text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
            Unlock Your Potential with Expert-Led Professional Training
          </h1>
          <p className="text-lg leading-relaxed text-pretty">
            Empowering individuals and teams across India to grow, upskill, and lead with DATAR Training's proven methodologies.
          </p>
          <div className="flex items-center gap-3">
            <Button className="bg-primary text-primary-foreground hover:opacity-90" asChild>
              <Link href="/programs">Explore Courses</Link>
            </Button>
            <Button variant="outline" className="border-primary text-primary bg-transparent" asChild>
              <Link href="/contact">Book Free Consultation</Link>
            </Button>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden ring-1 ring-border">
          <img
            alt="Professional coach speaking to a group in India"
            src="/indian-professional-training-coach.jpg"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  )
}
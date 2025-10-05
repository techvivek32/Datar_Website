"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="px-6 py-12 md:py-16 bg-secondary">
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <h2 className="heading-font text-3xl md:text-4xl font-semibold">Contact DATAR Training</h2>
          <p className="leading-relaxed">Reach out to Dr. Mahesh Vasoya and Mr. Sudesh Aggrawal for individual coaching, campus programs, or corporate workshops.</p>
          <div className="flex flex-col gap-3">
            <Link
              href="https://wa.me/919054122224"
              className="inline-flex items-center justify-center rounded-md px-4 py-2 bg-accent text-accent-foreground"
              aria-label="Contact on WhatsApp"
            >
              WhatsApp us
            </Link>
            <div className="text-sm">
              <span className="block">Phone: +91-9054122224</span>
              <span className="block">Email: mahesh@datartraining.com</span>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Input name="name" placeholder="Name" required aria-label="Name" />
            <Input name="phone" placeholder="Phone" aria-label="Phone" />
          </div>
          <Input type="email" name="email" placeholder="Email" required aria-label="Email" />
          <Textarea name="message" placeholder="Message" rows={5} aria-label="Message" />
          <Button type="submit" className="bg-primary text-primary-foreground">
            Send Message
          </Button>
          {submitted && (
            <p role="status" className="text-sm">
              Thanks! This demo form doesn't send yet. We'll integrate email/WhatsApp in production.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
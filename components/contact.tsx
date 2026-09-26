'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight, Check, Copy } from 'lucide-react'
import type { SiteContent } from '@/content/site'
import { SectionHeading } from './section-heading'

const socialHrefs = [
  'https://www.youtube.com/@olivafranco91',
  'https://www.artstation.com/olivafranco91',
]

const email = 'franco.oliva1991@gmail.com'
const linkedInHref = 'https://www.linkedin.com/in/olivafranco'

export function Contact({ copy }: { copy: SiteContent['contact'] }) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return

    const timeout = window.setTimeout(() => setCopied(false), 2000)
    return () => window.clearTimeout(timeout)
  }, [copied])

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute -bottom-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full opacity-[0.1] blur-[120px]"
        style={{
          background: 'radial-gradient(circle, var(--technical), transparent 70%)',
        }}
      />
      <div className="section-shell relative">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <SectionHeading
              index="04"
              eyebrow={copy.heading.eyebrow}
              title={copy.heading.title}
              description={copy.heading.description}
            />

            <div className="mt-8 flex flex-wrap gap-2">
              {copy.services.map((s) => (
                <span
                  key={s}
                  className="border border-border bg-card/60 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="editorial-panel flex min-w-0 flex-col justify-center gap-4 border border-border p-6 sm:p-8">
            <h3 className="text-lg font-bold tracking-tight text-foreground">
              {copy.cardTitle}
            </h3>

            <div className="flex flex-col gap-4 border border-border bg-background/60 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-technical">
                  {copy.emailLabel}
                </div>
                <div className="mt-1 break-all text-base font-medium text-foreground">
                  {email}
                </div>
              </div>
              <button
                type="button"
                onClick={copyEmail}
                aria-label={copied ? copy.emailCopied : copy.copyEmail}
                className="inline-flex shrink-0 items-center gap-2 self-start px-2.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:self-auto"
              >
                {copied ? (
                  <Check className="size-4 text-technical" aria-hidden="true" />
                ) : (
                  <Copy className="size-4" aria-hidden="true" />
                )}
                <span aria-live="polite">
                  {copied ? copy.emailCopied : copy.copyEmail}
                </span>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {copy.socialLinks.map((label, index) => (
                <a
                  key={label}
                  href={socialHrefs[index]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border border-border bg-background/60 px-4 py-3.5 text-sm font-medium transition-colors hover:border-technical/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  {label}
                  <ArrowUpRight className="size-4 text-technical transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </a>
              ))}
            </div>

            <div aria-hidden="true" className="border-t border-border" />

            <a
              href={linkedInHref}
              target="_blank"
              rel="noopener noreferrer"
              className="diagonal-cut mt-2 inline-flex items-center justify-center gap-2 bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/85 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              {copy.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

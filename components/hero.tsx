import { ArrowRight, ArrowUpRight } from 'lucide-react'
import type { Dictionary } from '@/i18n/dictionary'

export function Hero({ copy }: { copy: Dictionary['hero'] }) {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border"
    >
      {/* Subtle technical grid backdrop */}
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full opacity-[0.18] blur-[120px]"
        style={{
          background:
            'radial-gradient(circle, var(--cyan), transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-36 md:pb-32 md:pt-44">
        <div
          className="fade-up inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground"
          style={{ animationDelay: '0ms' }}
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
          {copy.availability}
        </div>

        <h1
          className="fade-up mt-8 max-w-4xl text-balance font-heading text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
          style={{ animationDelay: '60ms' }}
        >
          {copy.titlePrefix}{' '}
          <span className="text-primary">{copy.titleHighlight}</span>.
        </h1>

        <p
          className="fade-up mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground"
          style={{ animationDelay: '120ms' }}
        >
          {copy.description}
        </p>

        <div
          className="fade-up mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          style={{ animationDelay: '180ms' }}
        >
          <a
            href="#projects"
            className="group inline-flex items-center justify-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            {copy.primaryCta}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card/60 px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            {copy.secondaryCta}
            <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  )
}

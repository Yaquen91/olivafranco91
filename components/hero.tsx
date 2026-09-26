import { ArrowRight, ArrowUpRight } from 'lucide-react'
import type { SiteContent } from '@/content/site'

export function Hero({ copy }: { copy: SiteContent['hero'] }) {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border"
    >
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-70" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-technical/50 to-transparent" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full opacity-[0.12] blur-[120px]"
        style={{
          background:
            'radial-gradient(circle, var(--technical), transparent 70%)',
        }}
      />
      <div aria-hidden="true" className="pointer-events-none absolute right-[7%] top-32 hidden h-72 w-56 rotate-[-4deg] border border-border opacity-55 lg:block">
        <div className="absolute -left-5 top-8 h-px w-28 bg-technical/50" />
        <div className="absolute right-5 top-5 font-mono text-[9px] tracking-[0.25em] text-muted-foreground">
          UE / SYSTEM
        </div>
        <div className="absolute inset-x-5 top-20 grid gap-3">
          <span className="h-8 border border-border bg-card/60" />
          <span className="ml-8 h-8 border border-technical/25 bg-card/60" />
          <span className="h-8 border border-border bg-card/60" />
        </div>
        <div className="absolute -bottom-px -right-px h-16 w-16 border-b-2 border-r-2 border-primary/60" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 pb-24 pt-32 sm:px-6 md:pb-36 md:pt-40">
        <div
          className="fade-up flex flex-wrap items-center gap-x-4 gap-y-2"
          style={{ animationDelay: '0ms' }}
        >
          <span className="text-xs font-bold tracking-[0.16em]">{copy.name}</span>
          <span className="h-px w-8 bg-primary" />
          <span className="technical-label">{copy.certification}</span>
        </div>

        <div
          className="fade-up mt-6 inline-flex items-center gap-2 border border-border bg-card/55 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
          style={{ animationDelay: '30ms' }}
        >
          <span className="size-1.5 bg-primary" />
          {copy.availability}
        </div>

        <h1
          className="fade-up mt-8 max-w-4xl text-balance font-display text-4xl font-extrabold leading-[0.95] tracking-[-0.025em] sm:text-6xl md:text-7xl lg:max-w-5xl lg:text-8xl"
          style={{ animationDelay: '60ms' }}
        >
          {copy.titlePrefix}{' '}
          <span className="text-technical">{copy.titleHighlight}</span>.
        </h1>

        <p
          className="fade-up mt-7 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
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
            className="diagonal-cut group inline-flex items-center justify-center gap-2 bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/85 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            {copy.primaryCta}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
          <a
            href="#videos"
            className="group inline-flex items-center justify-center gap-2 border border-border bg-card/60 px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-technical/45 hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            {copy.secondaryCta}
            <ArrowUpRight className="size-4 text-technical transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </a>
        </div>

        <p
          className="fade-up mt-10 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground"
          style={{ animationDelay: '220ms' }}
        >
          {copy.signature}
        </p>
      </div>
    </section>
  )
}

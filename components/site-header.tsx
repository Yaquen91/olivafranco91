'use client'

import { useEffect, useRef, useState } from 'react'
import type { SiteContent } from '@/content/site'
import { cn } from '@/lib/utils'

export function SiteHeader({ copy }: { copy: SiteContent['header'] }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const scrollSentinelRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const scrollSentinel = scrollSentinelRef.current

    if (!scrollSentinel) return

    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 },
    )

    observer.observe(scrollSentinel)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <span
        ref={scrollSentinelRef}
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-3 h-px w-px"
      />
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300',
          scrolled
            ? 'border-border bg-background/90 backdrop-blur-xl'
            : 'border-transparent bg-background/20',
        )}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6">
          <a
            href="#top"
            className="group flex min-w-0 items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            <span className="diagonal-cut flex size-8 shrink-0 items-center justify-center border border-border bg-card font-mono text-[10px] font-semibold text-technical transition-colors group-hover:border-technical/50">
              FO
            </span>
            <span className="truncate text-xs font-semibold tracking-[0.08em]">
              {copy.brand}
            </span>
            <span className="hidden font-mono text-[10px] tracking-wider text-muted-foreground xl:inline">
              / {copy.role}
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {copy.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative px-3 py-2 text-sm text-muted-foreground transition-colors after:absolute after:inset-x-3 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-primary after:transition-transform hover:text-foreground hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="diagonal-cut hidden bg-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/85 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring lg:inline-block"
            >
              {copy.contactCta}
            </a>
            <button
              type="button"
              aria-label={copy.menuToggleLabel}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex size-9 items-center justify-center border border-border bg-card/60 transition-colors hover:border-technical/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring lg:hidden"
            >
              <div className="flex flex-col gap-1.5">
                <span
                  className={`h-px w-4 bg-foreground transition-transform ${open ? 'translate-y-[3px] rotate-45' : ''}`}
                />
                <span
                  className={`h-px w-4 bg-foreground transition-transform ${open ? '-translate-y-[3px] -rotate-45' : ''}`}
                />
              </div>
            </button>
          </div>
        </div>

        {open && (
          <nav className="editorial-panel border-t border-border bg-background/95 px-5 py-5 backdrop-blur-xl lg:hidden">
            <div className="flex flex-col gap-1">
              {copy.navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-border px-1 py-3 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="diagonal-cut mt-3 bg-primary px-3 py-3 text-center text-sm font-semibold text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                {copy.contactCta}
              </a>
            </div>
          </nav>
        )}
      </header>
    </>
  )
}

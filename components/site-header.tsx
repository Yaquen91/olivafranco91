'use client'

import { useEffect, useRef, useState } from 'react'
import type { Dictionary } from '@/i18n/dictionary'

export function SiteHeader({ copy }: { copy: Dictionary['header'] }) {
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
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled
            ? 'border-b border-border bg-background/80 backdrop-blur-xl'
            : 'border-b border-transparent'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a
            href="#top"
            className="flex items-center gap-2.5 text-sm font-medium tracking-tight"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-md border border-border bg-card font-mono text-xs text-primary">
              F
            </span>
            <span>{copy.brand}</span>
            <span className="hidden font-mono text-xs text-muted-foreground sm:inline">
              / {copy.role}
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {copy.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90 sm:inline-block"
            >
              {copy.contactCta}
            </a>
            <button
              type="button"
              aria-label={copy.menuToggleLabel}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-md border border-border md:hidden"
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
          <nav className="border-t border-border bg-background/95 px-6 py-4 backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-1">
              {copy.navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-md bg-foreground px-3 py-2.5 text-center text-sm font-medium text-background"
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

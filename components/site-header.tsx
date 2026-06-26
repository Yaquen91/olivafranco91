'use client'

import { useEffect, useState } from 'react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'How I Help', href: '#expertise' },
  { label: 'Projects', href: '#projects' },
  { label: 'Teaching', href: '#teaching' },
  { label: 'Videos', href: '#youtube' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
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
          <span>Franco</span>
          <span className="hidden font-mono text-xs text-muted-foreground sm:inline">
            / UE Developer
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
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
            Work With Me
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
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
            {navItems.map((item) => (
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
              Work With Me
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}

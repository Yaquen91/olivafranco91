import type { SiteContent } from '@/content/site'

export function SiteFooter({ copy }: { copy: SiteContent['footer'] }) {
  return (
    <footer className="relative border-t border-border">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex items-center gap-2.5 text-sm">
          <span className="diagonal-cut flex size-8 items-center justify-center border border-border bg-card font-mono text-[10px] text-technical">
            FO
          </span>
          <span className="text-xs font-semibold tracking-[0.08em]">{copy.brand}</span>
          <span className="hidden font-mono text-[10px] tracking-wider text-muted-foreground md:inline">
            / {copy.role}
          </span>
        </div>

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {copy.copyright}
        </p>
      </div>
    </footer>
  )
}

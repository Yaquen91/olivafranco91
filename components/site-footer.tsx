export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2.5 text-sm">
          <span className="flex h-7 w-7 items-center justify-center rounded-md border border-border bg-card font-mono text-xs text-primary">
            F
          </span>
          <span className="font-medium">Franco</span>
          <span className="font-mono text-xs text-muted-foreground">
            / Desarrollador de Unreal Engine
          </span>
        </div>

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Franco. Creado con Next.js.
        </p>
      </div>
    </footer>
  )
}

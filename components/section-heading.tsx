export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: {
  index: string
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <div className="min-w-0 max-w-2xl">
      <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em]">
        <span className="text-technical">{index}</span>
        <span className="h-px w-10 bg-gradient-to-r from-technical/70 to-border" />
        <span className="text-muted-foreground">{eyebrow}</span>
      </div>
      <h2 className="mt-6 text-balance font-display text-3xl font-bold leading-[1.02] tracking-[-0.02em] sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  )
}

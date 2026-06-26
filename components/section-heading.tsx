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
    <div className="max-w-2xl">
      <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-primary">
        <span>{index}</span>
        <span className="h-px w-8 bg-border" />
        <span className="text-muted-foreground">{eyebrow}</span>
      </div>
      <h2 className="mt-5 text-balance font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  )
}

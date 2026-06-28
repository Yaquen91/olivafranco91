import { SectionHeading } from './section-heading'
import type { Dictionary } from '@/i18n/dictionary'

export function About({ copy }: { copy: Dictionary['about'] }) {
  return (
    <section id="about" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <SectionHeading
            index="01"
            eyebrow={copy.heading.eyebrow}
            title={copy.heading.title}
            description={copy.heading.description}
          />

          <div className="space-y-6 text-pretty leading-relaxed text-muted-foreground">
            {copy.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <div className="grid gap-4 pt-4 sm:grid-cols-1">
              {copy.principles.map((p) => (
                <div
                  key={p.title}
                  className="rounded-lg border border-border bg-card/50 p-5 transition-colors hover:border-primary/30"
                >
                  <h3 className="text-sm font-medium text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

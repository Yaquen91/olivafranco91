import { SectionHeading } from './section-heading'
import type { SiteContent } from '@/content/site'

export function About({ copy }: { copy: SiteContent['about'] }) {
  return (
    <section id="about" className="border-b border-border">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <SectionHeading
            index="01"
            eyebrow={copy.heading.eyebrow}
            title={copy.heading.title}
            description={copy.heading.description}
          />

          <div className="flex min-w-0 flex-col gap-6 text-pretty leading-relaxed text-muted-foreground">
            {copy.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <div className="grid gap-4 pt-4 sm:grid-cols-1">
              {copy.principles.map((p, index) => (
                <div
                  key={p.title}
                  className="editorial-panel group border border-border p-5 transition-colors hover:border-technical/35"
                >
                  <div className="grid grid-cols-[auto_1fr] gap-4">
                    <span className="font-mono text-[10px] text-technical">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {p.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

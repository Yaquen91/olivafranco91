import { projects } from '@/data/projects'
import type { Dictionary } from '@/i18n/dictionary'
import { SectionHeading } from './section-heading'

export function Projects({ copy }: { copy: Dictionary['projects'] }) {
  return (
    <section id="projects" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <SectionHeading
          index="03"
          eyebrow={copy.heading.eyebrow}
          title={copy.heading.title}
          description={copy.heading.description}
        />

        <div className="mt-14 grid gap-6">
          {projects.map((project) => {
            const content = copy.items[project.id]
            const projectDetails = [
              { k: copy.labels.problem, v: content.problem },
              { k: copy.labels.solution, v: content.solution },
              { k: copy.labels.implementation, v: content.implementation },
              { k: copy.labels.result, v: content.result },
              { k: copy.labels.learnings, v: content.learnings },
            ]

            return (
              <article
                key={project.id}
                className="group flex flex-col rounded-xl border border-border bg-card/50 p-6 transition-colors hover:border-primary/30 md:p-8"
              >
                <header className="flex items-center justify-between gap-4">
                  <span className="font-mono text-xs text-muted-foreground">
                    {project.id}
                  </span>
                  <span className="rounded-full border border-border px-3 py-1 text-xs text-primary">
                    {content.tag}
                  </span>
                </header>

                <div className="mt-5 grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(280px,1fr)] lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
                  <div>
                    <h3 className="text-balance font-heading text-xl font-semibold tracking-tight">
                      {content.title}
                    </h3>
                    <p className="mt-2 font-mono text-xs text-muted-foreground">
                      {content.type}
                    </p>
                    <p className="mt-5 text-sm leading-relaxed text-foreground/90">
                      {content.context}
                    </p>
                  </div>

                  <div className="min-h-64 overflow-hidden rounded-xl border border-border bg-secondary">
                    <img
                      src={project.imageSrc}
                      alt={content.imageAlt}
                      width={1200}
                      height={900}
                      loading="lazy"
                      className="aspect-[4/3] h-full w-full object-cover md:aspect-auto"
                    />
                  </div>
                </div>

                <dl className="mt-8 space-y-4 border-t border-border pt-6">
                  {projectDetails.map((row) => (
                    <div
                      key={row.k}
                      className="grid gap-2 sm:grid-cols-[112px_1fr] sm:gap-3"
                    >
                      <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                        {row.k}
                      </dt>
                      <dd className="text-sm leading-relaxed text-foreground/90">
                        {row.v}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-6">
                  {content.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-secondary px-2.5 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

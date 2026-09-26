import Image from 'next/image'
import { projects } from '@/data/projects'
import type { SiteContent } from '@/content/site'
import { SectionHeading } from './section-heading'

export function Projects({ copy }: { copy: SiteContent['projects'] }) {
  return (
    <section id="projects" className="border-b border-border">
      <div className="section-shell">
        <SectionHeading
          index="02"
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
                className="editorial-panel group flex min-w-0 flex-col overflow-hidden border border-border p-5 transition-colors hover:border-technical/35 sm:p-6 md:p-8"
              >
                <header className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[10px] tracking-wider text-technical">
                      {project.id}
                    </span>
                    <span className="h-px w-10 bg-border" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      Unreal Engine
                    </span>
                  </div>
                  <span className="border border-primary/30 bg-primary/5 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-primary">
                    {content.tag}
                  </span>
                </header>

                <div className="mt-7 grid min-w-0 gap-8 md:grid-cols-[minmax(0,1fr)_minmax(280px,1fr)] lg:grid-cols-[minmax(0,5fr)_minmax(0,4fr)]">
                  <div className="min-w-0 md:py-3">
                    <h3 className="text-balance font-display text-2xl font-semibold leading-tight tracking-[-0.015em] sm:text-3xl">
                      {content.title}
                    </h3>
                    <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-technical">
                      {content.type}
                    </p>
                    <p className="mt-6 text-sm leading-relaxed text-foreground/85">
                      {content.context}
                    </p>
                  </div>

                  <div className="diagonal-cut relative min-h-64 overflow-hidden border border-border bg-secondary">
                    <Image
                      src={project.imageSrc}
                      alt={content.imageAlt}
                      width={1672}
                      height={941}
                      sizes="(min-width: 1024px) 430px, (min-width: 768px) 50vw, 100vw"
                      className="aspect-[4/3] h-full w-full object-cover transition duration-500 group-hover:scale-[1.015] md:aspect-auto"
                    />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background/70 to-transparent" />
                  </div>
                </div>

                <dl className="mt-8 flex flex-col border-t border-border pt-2">
                  {projectDetails.map((row) => (
                    <div
                      key={row.k}
                      className="grid gap-2 border-b border-border py-4 last:border-b-0 sm:grid-cols-[128px_1fr] sm:gap-4"
                    >
                      <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-technical">
                        {row.k}
                      </dt>
                      <dd className="text-sm leading-relaxed text-foreground/90">
                        {row.v}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-4 flex flex-wrap gap-2 border-t border-border pt-6">
                  {content.tech.map((t) => (
                    <span
                      key={t}
                      className="border border-border bg-secondary/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground transition-colors group-hover:border-border/80"
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

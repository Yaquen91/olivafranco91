import { BadgeCheck, Users, User, Building2 } from 'lucide-react'
import type { Dictionary } from '@/i18n/dictionary'
import { SectionHeading } from './section-heading'

const formatIcons = [User, Users, Building2]

export function Teaching({ copy }: { copy: Dictionary['teaching'] }) {
  return (
    <section id="teaching" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <SectionHeading
          index="04"
          eyebrow={copy.heading.eyebrow}
          title={copy.heading.title}
          description={copy.heading.description}
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          {/* Philosophy + featured class + certification */}
          <div className="flex flex-col gap-6">
            <div className="rounded-xl border border-border bg-card/50 p-6 md:p-8">
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {copy.philosophy.eyebrow}
              </div>
              <h3 className="mt-2 font-heading text-lg font-semibold tracking-tight">
                {copy.philosophy.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {copy.philosophy.body}
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card/50 p-6 md:p-8">
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {copy.featuredCourse.eyebrow}
              </div>
              <h3 className="mt-2 font-heading text-lg font-semibold tracking-tight">
                {copy.featuredCourse.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {copy.featuredCourse.body}
              </p>
            </div>

            <div className="relative overflow-hidden rounded-xl border border-primary/25 bg-card/50 p-6 md:p-8">
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-20 blur-3xl"
                style={{
                  background:
                    'radial-gradient(circle, var(--cyan), transparent 70%)',
                }}
              />
              <div className="relative flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-primary/30 bg-background text-primary">
                  <BadgeCheck className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-widest text-primary">
                    {copy.certification.eyebrow}
                  </div>
                  <h3 className="mt-2 font-heading text-xl font-semibold tracking-tight">
                    {copy.certification.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {copy.certification.body}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Topics + training formats */}
          <div className="flex flex-col gap-6">
            <div className="rounded-xl border border-border bg-card/50 p-6 md:p-8">
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {copy.topicsLabel}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {copy.topics.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-secondary px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {copy.formatsLabel}
            </div>
            {copy.formats.map((f, index) => {
              const Icon = formatIcons[index]
              return (
              <div
                key={f.title}
                className="flex items-start gap-4 rounded-xl border border-border bg-card/50 p-6 transition-colors hover:border-primary/30"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-background text-primary">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-heading text-base font-medium tracking-tight">
                    {f.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {f.body}
                  </p>
                </div>
              </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

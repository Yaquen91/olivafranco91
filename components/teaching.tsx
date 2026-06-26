import { BadgeCheck, Users, User, Building2 } from 'lucide-react'
import { SectionHeading } from './section-heading'

const topics = [
  'Editor tools & scripting',
  'Utility widgets',
  'Automation & validation',
  'Blueprint architecture',
  'Developer workflows',
  'Performance & profiling',
  'Project structure',
  'C++ for Blueprint devs',
]

const formats = [
  {
    icon: User,
    title: 'Individuals',
    body: 'Mentoring and private lessons focused on the tools and workflow habits that will help your current project most.',
  },
  {
    icon: Users,
    title: 'Teams',
    body: 'On-site or remote workshops that align a whole team on shared tooling, conventions and a faster way of working.',
  },
  {
    icon: Building2,
    title: 'Institutions',
    body: 'Structured curricula and guest instruction that bring real production practices into schools and programs.',
  },
]

export function Teaching() {
  return (
    <section id="teaching" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <SectionHeading
          index="04"
          eyebrow="Teaching"
          title="Practical instruction, grounded in real work."
          description="Everything I teach comes from solving real production problems and building real tools. My goal is simple: help developers and teams walk away able to do the same."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          {/* Philosophy + featured class + certification */}
          <div className="flex flex-col gap-6">
            <div className="rounded-xl border border-border bg-card/50 p-6 md:p-8">
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Teaching Philosophy
              </div>
              <h3 className="mt-2 font-heading text-lg font-semibold tracking-tight">
                Learn it the way it&apos;s actually built.
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                I don&apos;t teach features in isolation. I show how tools,
                workflows and systems fit together in a real project — why the
                decisions matter and how to keep things maintainable — so what
                you learn is something you can apply the same day.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card/50 p-6 md:p-8">
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Featured Class
              </div>
              <h3 className="mt-2 font-heading text-lg font-semibold tracking-tight">
                Better Tools & Workflows for Unreal Engine Teams
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                A signature multi-session class that takes developers from
                ad-hoc setups to a clean toolset and workflow — editor tools,
                conventions and a maintainable Blueprint/C++ structure they can
                reuse across projects. Detailed syllabus and enrollment coming
                soon.
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
                    Certification
                  </div>
                  <h3 className="mt-2 font-heading text-xl font-semibold tracking-tight">
                    Epic Authorized Instructor
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Reserved space to showcase official Epic Authorized
                    Instructor certification, credentials and verification once
                    finalized.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Topics + training formats */}
          <div className="flex flex-col gap-6">
            <div className="rounded-xl border border-border bg-card/50 p-6 md:p-8">
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Topics I teach
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {topics.map((t) => (
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
              Training for individuals and teams
            </div>
            {formats.map((f) => (
              <div
                key={f.title}
                className="flex items-start gap-4 rounded-xl border border-border bg-card/50 p-6 transition-colors hover:border-primary/30"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-background text-primary">
                  <f.icon className="h-5 w-5" strokeWidth={1.75} />
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
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

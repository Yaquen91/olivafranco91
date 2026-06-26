import { SectionHeading } from './section-heading'

const principles = [
  {
    title: 'I like solving real production problems',
    body: 'The messy, real-world constraints are the interesting part. I enjoy untangling the bottlenecks that slow a team down and finding a solution that actually fits how they work.',
  },
  {
    title: 'I build tools that improve workflows',
    body: 'A good editor tool, widget or convention quietly pays for itself every single day. I love building the things that make a whole team faster, calmer and more consistent.',
  },
  {
    title: 'I turn solutions into learning',
    body: 'Every problem I solve becomes something I can teach. I distil real fixes into practical lessons developers can apply to their own projects immediately.',
  },
]

export function About() {
  return (
    <section id="about" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <SectionHeading
            index="01"
            eyebrow="About"
            title="I build the tools, then teach the workflow."
            description="What drives me isn't a particular engine feature — it's helping developers and teams work better. I care about the practices, the tooling and the knowledge that make a project easier to build."
          />

          <div className="space-y-6 text-pretty leading-relaxed text-muted-foreground">
            <p>
              I enjoy solving real production problems, building tools that
              improve development workflows, and turning those real-world
              solutions into practical learning experiences that developers can
              immediately apply.
            </p>
            <p>
              Gameplay programming is part of my background, but it&apos;s not
              the point. The thread that runs through everything I do is the
              same: take something painful in the day-to-day of building Unreal
              projects, make it smoother with better tools and conventions, and
              then share how it was done so other developers can do it too.
            </p>

            <div className="grid gap-4 pt-4 sm:grid-cols-1">
              {principles.map((p) => (
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

import {
  PenTool,
  LayoutPanelLeft,
  Workflow,
  GitBranch,
  Gauge,
  Boxes,
  GraduationCap,
} from 'lucide-react'
import { SectionHeading } from './section-heading'

const areas = [
  {
    icon: PenTool,
    title: 'Editor Tools',
    body: 'Custom editor utilities that remove tedious, error-prone work so developers can focus on building the actual game.',
  },
  {
    icon: LayoutPanelLeft,
    title: 'Utility Widgets',
    body: 'Editor and runtime widgets that give designers and artists safe, self-serve control — fewer engineering bottlenecks for everyone.',
  },
  {
    icon: Workflow,
    title: 'Automation',
    body: 'Automating repetitive tasks, validation and asset processing so teams spend their time on creative work, not busywork.',
  },
  {
    icon: GitBranch,
    title: 'Developer Workflows',
    body: 'Version control, project structure and tooling conventions that keep Unreal projects healthy and easy to work in as they scale.',
  },
  {
    icon: Gauge,
    title: 'Pipeline Optimization',
    body: 'Profiling and reworking the slow parts of a production pipeline so iteration is faster and performance stays predictable.',
  },
  {
    icon: Boxes,
    title: 'Blueprint Architecture',
    body: 'Readable, component-driven Blueprint systems a whole team can extend and maintain — not spaghetti that only one person understands.',
  },
  {
    icon: GraduationCap,
    title: 'Technical Training',
    body: 'Practical instruction grounded in real production experience that helps developers apply better practices immediately.',
  },
]

export function Expertise() {
  return (
    <section id="expertise" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <SectionHeading
          index="02"
          eyebrow="How I Help"
          title="The value I bring to a team."
          description="Less about what I know, more about what changes when I'm involved: better tools, smoother workflows and developers who can move faster with confidence."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <div
              key={area.title}
              className="group relative bg-card p-6 transition-colors hover:bg-secondary"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background text-primary transition-colors group-hover:border-primary/40">
                <area.icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 font-heading text-base font-medium tracking-tight">
                {area.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {area.body}
              </p>
            </div>
          ))}

          {/* Filler cell to complete the grid on lg */}
          <div className="hidden items-center bg-card p-6 lg:flex">
            <p className="font-mono text-xs leading-relaxed text-muted-foreground">
              {'// More resources, courses and articles'}
              <br />
              {'// coming to this space soon.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

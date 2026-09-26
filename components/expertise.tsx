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
import type { SiteContent } from '@/content/site'

const areaIcons = [PenTool, LayoutPanelLeft, Workflow, GitBranch, Gauge, Boxes, GraduationCap]

export function Expertise({ copy }: { copy: SiteContent['expertise'] }) {
  return (
    <section id="expertise" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <SectionHeading
          index="02"
          eyebrow={copy.heading.eyebrow}
          title={copy.heading.title}
          description={copy.heading.description}
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {copy.areas.map((area, index) => {
            const Icon = areaIcons[index]
            return (
            <div
              key={area.title}
              className="group relative bg-card p-6 transition-colors hover:bg-secondary"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background text-primary transition-colors group-hover:border-primary/40">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 font-heading text-base font-medium tracking-tight">
                {area.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {area.body}
              </p>
            </div>
            )
          })}

          {/* Filler cell to complete the grid on lg */}
          <div className="hidden items-center bg-card p-6 lg:flex">
            <p className="font-mono text-xs leading-relaxed text-muted-foreground">
              {copy.comingSoon[0]}
              <br />
              {copy.comingSoon[1]}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

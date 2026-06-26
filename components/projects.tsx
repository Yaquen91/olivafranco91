import { SectionHeading } from './section-heading'

const projects = [
  {
    id: 'GAS-01',
    title: 'Modular Ability System Framework',
    tag: 'Gameplay Architecture',
    problem:
      'A studio needed combat abilities that designers could author without engineer support, but the existing setup hard-coded every skill into character classes.',
    solution:
      'Designed a data-driven ability framework on top of the Gameplay Ability System with Blueprint-exposed effect graphs, a tag-based targeting layer and a reusable cooldown/cost model.',
    impact:
      'New abilities went from a multi-day engineering task to a same-day designer task, cutting combat iteration time by roughly 70% and freeing engineers for deeper work.',
    lessons:
      'The biggest win wasn\u2019t the code — it was handing ownership back to designers. Building for the people who use a system daily matters more than technical elegance.',
    tech: ['C++', 'GAS', 'Blueprints', 'Gameplay Tags', 'DataAssets'],
  },
  {
    id: 'TOOL-02',
    title: 'Level Validation Editor Toolkit',
    tag: 'Editor Tooling',
    problem:
      'Level artists kept shipping maps with missing nav data, broken references and inconsistent naming that only surfaced late in QA.',
    solution:
      'Built an Editor Utility Widget suite that scans levels against a configurable ruleset, reports issues inline and offers one-click auto-fixes for the common cases.',
    impact:
      'Level-related QA tickets dropped sharply and onboarding new artists became dramatically faster thanks to conventions the tooling enforced automatically.',
    lessons:
      'A small tool that runs at the right moment prevents far more pain than documentation ever will. Automating the check beats reminding people to do it.',
    tech: ['Editor Utility Widgets', 'Python', 'Blueprints', 'Slate'],
  },
  {
    id: 'PERF-03',
    title: 'Open-World Streaming Optimization',
    tag: 'Performance',
    problem:
      'An open-world prototype dropped below 30 FPS on target hardware, with hitches during world streaming and a bloated tick budget.',
    solution:
      'Profiled with Unreal Insights, restructured actor tick groups, introduced significance-based LODs and reworked Blueprint update loops into event-driven logic.',
    impact:
      'Locked a stable 60 FPS on target hardware, eliminated streaming hitches and gave the team a repeatable profiling workflow to keep performance in check.',
    lessons:
      'Optimization is a workflow, not a one-off fix. Leaving the team with a way to measure and reason about performance outlasts any single tuning pass.',
    tech: ['Unreal Insights', 'World Partition', 'C++', 'LOD Strategy'],
  },
  {
    id: 'EDU-04',
    title: 'Production-to-Curriculum Pipeline',
    tag: 'Teaching System',
    problem:
      'Teams wanted training that mirrored their real codebase, but generic courses taught patterns that did not match production constraints.',
    solution:
      'Created a methodology that turns shipped systems into progressive, hands-on lessons — each module rebuilds a real feature with documented decisions and trade-offs.',
    impact:
      'Trained 2,000+ developers with material that maps directly to their own workflows, measurably improving how quickly teams ship after training.',
    lessons:
      'People apply what mirrors their reality. Teaching from real, shipped systems — constraints and all — sticks far better than idealized examples.',
    tech: ['Curriculum Design', 'Live Instruction', 'Blueprints', 'C++'],
  },
]

export function Projects() {
  return (
    <section id="projects" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <SectionHeading
          index="03"
          eyebrow="Featured Projects"
          title="Technical case studies, not screenshots."
          description="Each of these solved a real production problem or improved how a team works. The pattern is always the same: the constraint, what I built, the outcome and what I took away from it."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col rounded-xl border border-border bg-card/50 p-6 transition-colors hover:border-primary/30 md:p-8"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-xs text-muted-foreground">
                  {project.id}
                </span>
                <span className="rounded-full border border-border px-3 py-1 text-xs text-primary">
                  {project.tag}
                </span>
              </div>

              <h3 className="mt-5 text-balance font-heading text-xl font-semibold tracking-tight">
                {project.title}
              </h3>

              <dl className="mt-6 space-y-4 border-t border-border pt-6">
                {[
                  { k: 'Problem', v: project.problem },
                  { k: 'Solution', v: project.solution },
                  { k: 'Impact', v: project.impact },
                  { k: 'Lessons', v: project.lessons },
                ].map((row) => (
                  <div key={row.k} className="grid grid-cols-[80px_1fr] gap-3">
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
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-secondary px-2.5 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

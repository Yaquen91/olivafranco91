import { Play, ArrowUpRight } from 'lucide-react'
import { SectionHeading } from './section-heading'

const videos = [
  {
    title: 'Cómo diseñar un sistema de habilidades Blueprint ordenado',
    length: '24:10',
    category: 'Sistemas de gameplay',
    description:
      'Un recorrido por la estructura de habilidades para que los diseñadores puedan ampliarlas sin modificar código gestionado por ingeniería.',
  },
  {
    title: 'Editor Utility Widgets desde cero',
    length: '18:42',
    category: 'Editor Tools',
    description:
      'Creación de una herramienta práctica de validación de niveles que detecta errores antes de que lleguen a QA.',
  },
  {
    title: 'Análisis de Unreal con Insights',
    length: '31:05',
    category: 'Optimización',
    description:
      'Cómo interpretar una traza, encontrar el verdadero cuello de botella y resolver problemas de rendimiento vinculados al Tick.',
  },
]

export function YouTube() {
  return (
    <section id="youtube" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            index="05"
            eyebrow="YouTube"
            title="Videos educativos seleccionados."
            description="Una biblioteca enfocada que prioriza la profundidad sobre la cantidad. Cada video explica una técnica real de principio a fin."
          />
          <a
            href="#"
            className="group inline-flex shrink-0 items-center gap-2 rounded-md border border-border bg-card/60 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
          >
            Visitar el canal
            <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {videos.map((video) => (
            <a
              key={video.title}
              href="#"
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card/50 transition-colors hover:border-primary/30"
            >
              <div className="relative aspect-video overflow-hidden border-b border-border bg-secondary">
                <div className="grid-bg absolute inset-0 opacity-50" />
                <div
                  className="pointer-events-none absolute inset-0 opacity-25 blur-2xl"
                  style={{
                    background:
                      'radial-gradient(circle at 30% 30%, var(--cyan), transparent 60%)',
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background/80 text-primary backdrop-blur transition-transform group-hover:scale-110">
                    <Play className="h-5 w-5 translate-x-0.5 fill-current" />
                  </span>
                </div>
                <span className="absolute bottom-3 right-3 rounded bg-background/80 px-2 py-0.5 font-mono text-xs text-foreground backdrop-blur">
                  {video.length}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <span className="font-mono text-xs uppercase tracking-wider text-primary">
                  {video.category}
                </span>
                <h3 className="mt-2 text-balance font-heading text-base font-medium leading-snug tracking-tight">
                  {video.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {video.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

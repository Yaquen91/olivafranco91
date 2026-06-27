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
    body: 'Utilidades de editor personalizadas que eliminan tareas tediosas y propensas a errores para que los desarrolladores puedan concentrarse en crear el juego.',
  },
  {
    icon: LayoutPanelLeft,
    title: 'Utility Widgets',
    body: 'Widgets de editor y ejecución que brindan a diseñadores y artistas un control seguro y autónomo, con menos cuellos de botella de ingeniería para todos.',
  },
  {
    icon: Workflow,
    title: 'Automatización',
    body: 'Automatización de tareas repetitivas, validaciones y procesamiento de recursos para que los equipos dediquen su tiempo al trabajo creativo, no a tareas mecánicas.',
  },
  {
    icon: GitBranch,
    title: 'Flujos de trabajo para desarrolladores',
    body: 'Control de versiones, estructura de proyectos y convenciones de herramientas que mantienen los proyectos de Unreal sólidos y fáciles de gestionar a medida que crecen.',
  },
  {
    icon: Gauge,
    title: 'Optimización del pipeline',
    body: 'Análisis y mejora de las partes lentas del pipeline de producción para acelerar la iteración y mantener un rendimiento predecible.',
  },
  {
    icon: Boxes,
    title: 'Blueprint Architecture',
    body: 'Sistemas Blueprint legibles y basados en componentes que todo el equipo puede ampliar y mantener, no código espagueti que solo una persona entiende.',
  },
  {
    icon: GraduationCap,
    title: 'Formación técnica',
    body: 'Enseñanza práctica basada en experiencia real de producción que ayuda a los desarrolladores a aplicar mejores prácticas de inmediato.',
  },
]

export function Expertise() {
  return (
    <section id="expertise" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <SectionHeading
          index="02"
          eyebrow="Cómo ayudo"
          title="El valor que aporto a un equipo."
          description="No se trata tanto de lo que sé, sino de lo que cambia cuando participo: mejores herramientas, flujos de trabajo más fluidos y desarrolladores capaces de avanzar más rápido y con confianza."
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
              {'// Próximamente habrá más recursos,'}
              <br />
              {'// cursos y artículos en este espacio.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

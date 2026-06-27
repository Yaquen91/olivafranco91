import { BadgeCheck, Users, User, Building2 } from 'lucide-react'
import { SectionHeading } from './section-heading'

const topics = [
  'Editor Tools y scripting',
  'Utility Widgets',
  'Automatización y validación',
  'Blueprint Architecture',
  'Flujos de trabajo para desarrolladores',
  'Rendimiento y análisis',
  'Estructura de proyectos',
  'C++ para desarrolladores de Blueprint',
]

const formats = [
  {
    icon: User,
    title: 'Personas',
    body: 'Mentorías y clases particulares centradas en las herramientas y los hábitos de trabajo que más ayudarán a tu proyecto actual.',
  },
  {
    icon: Users,
    title: 'Equipos',
    body: 'Talleres presenciales o remotos que alinean a todo el equipo en torno a herramientas y convenciones compartidas, y una forma de trabajar más ágil.',
  },
  {
    icon: Building2,
    title: 'Instituciones',
    body: 'Planes de estudio estructurados y clases especiales que acercan prácticas reales de producción a instituciones educativas y programas de formación.',
  },
]

export function Teaching() {
  return (
    <section id="teaching" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <SectionHeading
          index="04"
          eyebrow="Formación"
          title="Enseñanza práctica, basada en trabajo real."
          description="Todo lo que enseño surge de resolver problemas reales de producción y crear herramientas reales. Mi objetivo es simple: que desarrolladores y equipos puedan hacer lo mismo por su cuenta."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          {/* Philosophy + featured class + certification */}
          <div className="flex flex-col gap-6">
            <div className="rounded-xl border border-border bg-card/50 p-6 md:p-8">
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Filosofía de enseñanza
              </div>
              <h3 className="mt-2 font-heading text-lg font-semibold tracking-tight">
                Apréndelo como se crea en la práctica.
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                No enseño funcionalidades de forma aislada. Muestro cómo las
                herramientas, los flujos y los sistemas se integran en un
                proyecto real, por qué importan las decisiones y cómo mantener
                todo sostenible, para que puedas aplicar lo aprendido ese mismo
                día.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card/50 p-6 md:p-8">
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Curso destacado
              </div>
              <h3 className="mt-2 font-heading text-lg font-semibold tracking-tight">
                Mejores herramientas y flujos para equipos de Unreal Engine
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Un curso insignia de varias sesiones que guía a los
                desarrolladores desde configuraciones improvisadas hasta un
                conjunto ordenado de herramientas y flujos de trabajo:
                Editor Tools, convenciones y una estructura
                Blueprint/C++ sostenible y reutilizable. Próximamente estarán
                disponibles el programa detallado y la inscripción.
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
                    Certificación
                  </div>
                  <h3 className="mt-2 font-heading text-xl font-semibold tracking-tight">
                    Epic Authorized Instructor
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Espacio reservado para presentar la certificación oficial de
                    Epic Authorized Instructor, las credenciales y su
                    verificación una vez finalizadas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Topics + training formats */}
          <div className="flex flex-col gap-6">
            <div className="rounded-xl border border-border bg-card/50 p-6 md:p-8">
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Temas que enseño
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
              Formación para personas y equipos
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

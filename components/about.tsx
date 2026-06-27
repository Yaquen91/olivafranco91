import { SectionHeading } from './section-heading'

const principles = [
  {
    title: 'Me gusta resolver problemas reales de producción',
    body: 'Las limitaciones complejas del mundo real son la parte interesante. Disfruto detectar los cuellos de botella que frenan a un equipo y encontrar una solución que se adapte de verdad a su forma de trabajar.',
  },
  {
    title: 'Creo herramientas que mejoran los flujos de trabajo',
    body: 'Un buen Editor Tool, widget o convención demuestra su valor cada día. Me encanta crear soluciones que permiten a todo un equipo trabajar con más rapidez, tranquilidad y consistencia.',
  },
  {
    title: 'Convierto soluciones en aprendizaje',
    body: 'Cada problema que resuelvo se convierte en algo que puedo enseñar. Transformo soluciones reales en lecciones prácticas que los desarrolladores pueden aplicar de inmediato en sus proyectos.',
  },
]

export function About() {
  return (
    <section id="about" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <SectionHeading
            index="01"
            eyebrow="Sobre mí"
            title="Creo las herramientas y luego enseño el flujo de trabajo."
            description="Lo que me impulsa no es una función específica del motor, sino ayudar a desarrolladores y equipos a trabajar mejor. Me importan las prácticas, las herramientas y el conocimiento que facilitan la creación de un proyecto."
          />

          <div className="space-y-6 text-pretty leading-relaxed text-muted-foreground">
            <p>
              Disfruto resolver problemas reales de producción, crear
              herramientas que mejoran los flujos de desarrollo y convertir esas
              soluciones en experiencias prácticas de aprendizaje que los
              desarrolladores puedan aplicar de inmediato.
            </p>
            <p>
              La programación de gameplay forma parte de mi experiencia, pero no
              es el objetivo central. Todo lo que hago sigue un mismo hilo:
              identificar una dificultad cotidiana al crear proyectos con
              Unreal, simplificarla con mejores herramientas y convenciones, y
              compartir el proceso para que otros desarrolladores también puedan
              hacerlo.
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

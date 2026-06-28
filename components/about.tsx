import { SectionHeading } from './section-heading'

const principles = [
 {
title: 'Resuelvo problemas reales de producción',
body: 'Disfruto analizar cómo trabajan los equipos durante el desarrollo de un proyecto. Identificar cuellos de botella, tareas repetitivas o procesos poco eficientes es el primer paso para encontrar soluciones que realmente aporten valor.'
},
{
title: 'Optimizo flujos de trabajo',
body: 'Cuando detecto una oportunidad de mejora, busco la solución más adecuada. A veces es una Editor Tool, otras una convención o una mejora en el workflow. Lo importante no es la herramienta, sino ayudar a que el equipo trabaje de forma más rápida, consistente y mantenible.'
},
{
title: 'Comparto conocimiento práctico',
body: 'Cada solución se convierte en una oportunidad para enseñar. Me gusta transformar experiencias reales de desarrollo en contenido claro y aplicable, para que otros desarrolladores puedan aprovechar ese aprendizaje en sus propios proyectos.'
}

]

export function About() {
  return (
    <section id="about" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <SectionHeading
            index="01"
            eyebrow="Sobre mí"
            title="Creo herramientas y comparto el proceso detrás de ellas."
            description="Lo que me impulsa no es una funcionalidad específica de Unreal Engine, sino ayudar a desarrolladores y equipos a trabajar mejor. Me interesan las prácticas, las herramientas y los workflows que hacen que un proyecto sea más eficiente, mantenible y fácil de desarrollar."
          />

          <div className="space-y-6 text-pretty leading-relaxed text-muted-foreground">
            <p>
              Disfruto resolver problemas reales de producción, crear
              herramientas que mejoran los flujos de desarrollo y convertir esas
              soluciones en experiencias prácticas de aprendizaje que los
              desarrolladores puedan aplicar de inmediato.
            </p>
            <p>
             Si bien mi experiencia también incluye el desarrollo en Blueprints, hoy mi principal interés está en crear herramientas, optimizar procesos de trabajo y compartir ese conocimiento con otros desarrolladores.
            </p>
            <p>
              Todo lo que hago sigue un mismo objetivo: identificar una dificultad cotidiana al desarrollar proyectos con Unreal Engine, simplificarla mediante mejores herramientas, workflows y buenas prácticas, y compartir el proceso para que otros equipos también puedan beneficiarse.
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

import { SectionHeading } from './section-heading'

const projects = [
  {
    id: 'GAS-01',
    title: 'Framework modular de Gameplay Ability System',
    tag: 'Arquitectura de gameplay',
    problem:
      'Un estudio necesitaba habilidades de combate que los diseñadores pudieran crear sin asistencia de ingeniería, pero la implementación existente integraba cada habilidad directamente en las clases de los personajes.',
    solution:
      'Diseñé un framework de habilidades basado en datos sobre Gameplay Ability System, con grafos de Gameplay Effects expuestos a Blueprint, una capa de selección de objetivos basada en Gameplay Tags y un modelo reutilizable de cooldown y cost.',
    impact:
      'Las nuevas habilidades pasaron de requerir varios días de ingeniería a poder ser creadas por un diseñador en el mismo día. Esto redujo cerca de un 70 % el tiempo de iteración del combate y liberó a los ingenieros para tareas más complejas.',
    lessons:
      'El mayor logro no fue el código, sino devolverles el control a los diseñadores. Crear para quienes usan un sistema a diario importa más que la elegancia técnica.',
    tech: ['C++', 'GAS', 'Blueprints', 'Gameplay Tags', 'Data Assets'],
  },
  {
    id: 'TOOL-02',
    title: 'Kit de herramientas para validar niveles',
    tag: 'Editor Tools',
    problem:
      'Los artistas de niveles entregaban mapas con datos de navegación faltantes, referencias rotas y nombres inconsistentes que recién se detectaban en etapas avanzadas de QA.',
    solution:
      'Creé una suite de Editor Utility Widgets que analiza los niveles según un conjunto de reglas configurable, informa los problemas en contexto y ofrece correcciones automáticas con un clic para los casos habituales.',
    impact:
      'Los reportes de QA relacionados con niveles disminuyeron notablemente y la incorporación de nuevos artistas se aceleró gracias a las convenciones que las herramientas aplicaban de forma automática.',
    lessons:
      'Una pequeña herramienta que actúa en el momento adecuado evita muchos más problemas que la documentación. Automatizar la verificación es mejor que recordarles a las personas que deben hacerla.',
    tech: ['Editor Utility Widgets', 'Python', 'Blueprints', 'Slate'],
  },
  {
    id: 'PERF-03',
    title: 'Optimización del streaming de mundo abierto',
    tag: 'Rendimiento',
    problem:
      'Un prototipo de mundo abierto caía por debajo de 30 FPS en el hardware objetivo, con interrupciones durante el streaming del mundo y un presupuesto de Tick excesivo.',
    solution:
      'Analicé el rendimiento con Unreal Insights, reestructuré los Actor Tick Groups, incorporé LOD basados en relevancia y convertí los bucles de actualización de Blueprint en lógica orientada a eventos.',
    impact:
      'Logré 60 FPS estables en el hardware objetivo, eliminé las interrupciones del streaming y proporcioné al equipo un flujo de análisis reproducible para mantener el rendimiento bajo control.',
    lessons:
      'La optimización es un flujo de trabajo, no una corrección aislada. Darle al equipo una forma de medir y comprender el rendimiento aporta más valor que cualquier ajuste puntual.',
    tech: ['Unreal Insights', 'World Partition', 'C++', 'Estrategia de LOD'],
  },
  {
    id: 'EDU-04',
    title: 'Pipeline de producción a plan de estudios',
    tag: 'Sistema de enseñanza',
    problem:
      'Los equipos buscaban una formación que reflejara su código real, pero los cursos genéricos enseñaban patrones que no se ajustaban a las limitaciones de producción.',
    solution:
      'Creé una metodología que convierte sistemas publicados en lecciones prácticas y progresivas. Cada módulo reconstruye una funcionalidad real con sus decisiones y concesiones documentadas.',
    impact:
      'Capacité a más de 2000 desarrolladores con material directamente aplicable a sus propios flujos de trabajo, mejorando de forma medible la velocidad de entrega de los equipos después de la formación.',
    lessons:
      'Las personas aplican aquello que refleja su realidad. Enseñar a partir de sistemas reales y publicados, con todas sus limitaciones, deja una huella mucho mayor que los ejemplos idealizados.',
    tech: ['Diseño curricular', 'Clases en vivo', 'Blueprints', 'C++'],
  },
]

export function Projects() {
  return (
    <section id="projects" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <SectionHeading
          index="03"
          eyebrow="Proyectos destacados"
          title="Casos de estudio técnicos, no capturas de pantalla."
          description="Cada proyecto resolvió un problema real de producción o mejoró la forma de trabajar de un equipo. El patrón siempre es el mismo: la limitación, lo que construí, el resultado y lo que aprendí."
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
                  { k: 'Problema', v: project.problem },
                  { k: 'Solución', v: project.solution },
                  { k: 'Impacto', v: project.impact },
                  { k: 'Lecciones', v: project.lessons },
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

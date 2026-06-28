import { ArrowRight, ArrowUpRight } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border"
    >
      {/* Subtle technical grid backdrop */}
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full opacity-[0.18] blur-[120px]"
        style={{
          background:
            'radial-gradient(circle, var(--cyan), transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-36 md:pb-32 md:pt-44">
        <div
          className="fade-up inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground"
          style={{ animationDelay: '0ms' }}
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
          Disponible para estudios, consultoría y formación
        </div>

        <h1
          className="fade-up mt-8 max-w-4xl text-balance font-heading text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
          style={{ animationDelay: '60ms' }}
        >
          Ayudo a desarrolladores a crear mejores proyectos con{' '}
          <span className="text-primary">Unreal Engine</span>.
        </h1>

        <p
          className="fade-up mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground"
          style={{ animationDelay: '120ms' }}
        >
          Soy Franco Oliva, Game Developer especializado en Unreal Engine e Instructor Autorizado por Epic Games. Resuelvo problemas reales de producción creando herramientas y mejores flujos de trabajo, y luego convierto esa experiencia en formación técnica para desarrolladores y estudios.
        </p>

        <div
          className="fade-up mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          style={{ animationDelay: '180ms' }}
        >
          <a
            href="#projects"
            className="group inline-flex items-center justify-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Ver proyectos
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card/60 px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            Trabajemos juntos
            <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
        {/* Comentamos datos falsos para reemplazarlos por reales en un futuro */}
        {/* <dl className="fade-up mt-16 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-8 border-t border-border pt-10 sm:grid-cols-4">
          {[
            { value: '8+', label: 'Años con Unreal Engine' },
            { value: '40+', label: 'Herramientas y sistemas publicados' },
            { value: '2K+', label: 'Desarrolladores ayudados' },
            { value: 'Herramientas', label: 'Flujos de trabajo y formación' },
          ].map((stat) => (
            <div key={stat.label}>
              <dt className="font-mono text-2xl font-semibold tracking-tight text-foreground">
                {stat.value}
              </dt>
              <dd className="mt-1 text-sm leading-snug text-muted-foreground">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl> */}
      </div>
    </section>
  )
}

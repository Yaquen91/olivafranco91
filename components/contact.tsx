import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from './section-heading'

const services = [
  'Mentorías',
  'Formación para equipos',
  'Conferencias',
  'Consultoría',
  'Clases particulares',
]

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute -bottom-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full opacity-[0.14] blur-[120px]"
        style={{
          background: 'radial-gradient(circle, var(--cyan), transparent 70%)',
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <SectionHeading
              index="06"
              eyebrow="Contacto"
              title="Construyamos algo o llevemos a tu equipo al siguiente nivel."
              description="Ya sea que necesites diseñar la arquitectura de un sistema, formar a un equipo o preparar una sesión para tu evento, estaré encantado de conversar."
            />

            <div className="mt-8 flex flex-wrap gap-2">
              {services.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border bg-card/60 px-3.5 py-1.5 text-sm text-muted-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center gap-4 rounded-2xl border border-border bg-card/50 p-8">
            <a
              href="mailto:hello@franco.dev"
              className="group flex items-center justify-between gap-4 rounded-lg border border-border bg-background/60 p-5 transition-colors hover:border-primary/40"
            >
              <div>
                <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  Correo electrónico
                </div>
                <div className="mt-1 text-base font-medium text-foreground">
                  hello@franco.dev
                </div>
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'LinkedIn', href: '#' },
                { label: 'YouTube', href: '#' },
                { label: 'GitHub', href: '#' },
                { label: 'X / Twitter', href: '#' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group flex items-center justify-between rounded-lg border border-border bg-background/60 px-4 py-3.5 text-sm font-medium transition-colors hover:border-primary/40"
                >
                  {link.label}
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ))}
            </div>

            <a
              href="mailto:hello@franco.dev"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-foreground px-5 py-3.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Iniciar una conversación
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

import { ArrowUpRight } from 'lucide-react'
import type { SiteContent } from '@/content/site'
import { SectionHeading } from './section-heading'
import { VideoPlayer } from './video-player'

const youtubeHref = 'https://www.youtube.com/@olivafranco91'

export function Videos({ copy }: { copy: SiteContent['videos'] }) {
  return (
    <section id="videos" className="border-b border-border">
      <div className="section-shell">
        <SectionHeading
          index="03"
          eyebrow={copy.heading.eyebrow}
          title={copy.heading.title}
          description={copy.heading.description}
        />

        <div className="mt-12 flex flex-col gap-4 border-y border-border py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-technical">
            {copy.libraryLabel}
          </p>
          <a
            href={youtubeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 self-start text-sm font-semibold text-primary transition-colors hover:text-primary/80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            {copy.channelCta}
            <ArrowUpRight
              className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </div>

        <div className="mt-8 grid gap-x-6 gap-y-12 lg:grid-cols-2">
          {copy.items.map((video) => (
            <article key={video.id} className="group/card">
              <div className="relative aspect-video overflow-hidden border border-border bg-card transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-primary after:transition-transform group-hover/card:border-technical/35 group-hover/card:after:scale-x-100">
                <VideoPlayer
                  videoId={video.id}
                  title={video.title}
                  playLabel={`${copy.playLabel}: ${video.title}`}
                />
              </div>
              <div className="mt-5 grid grid-cols-[auto_1fr] gap-4">
                <span className="pt-1 font-mono text-xs text-technical">
                  {video.index}
                </span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    {video.category}
                  </p>
                  <h3 className="mt-2 text-balance font-display text-xl font-semibold leading-snug tracking-[-0.015em] md:text-2xl">
                    {video.title}
                  </h3>
                  <a
                    href={`https://www.youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link mt-4 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                  >
                    {copy.watchOnYoutube}
                    <ArrowUpRight
                      className="size-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

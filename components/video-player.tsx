'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Play } from 'lucide-react'

type VideoPlayerProps = {
  videoId: string
  title: string
  playLabel: string
}

export function VideoPlayer({
  videoId,
  title,
  playLabel,
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  if (isPlaying) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
        title={title}
        className="absolute inset-0 size-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    )
  }

  return (
    <button
      type="button"
      onClick={() => setIsPlaying(true)}
      aria-label={playLabel}
      className="group absolute inset-0 size-full overflow-hidden bg-card text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
    >
      <Image
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt=""
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover transition duration-500 group-hover:scale-[1.012] group-hover:brightness-75"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
      <span className="diagonal-cut absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-white/30 bg-background/85 text-primary shadow-2xl backdrop-blur-md transition duration-300 group-hover:border-primary/70 group-hover:bg-primary group-hover:text-primary-foreground">
        <Play className="ml-1 size-6 fill-current" aria-hidden="true" />
      </span>
      <span className="absolute bottom-4 left-4 border border-white/15 bg-background/75 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white backdrop-blur-md">
        Reproducir
      </span>
    </button>
  )
}

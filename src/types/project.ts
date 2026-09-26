import type { SiteContent } from '@/content/site'

export type Project = {
  id: keyof SiteContent['projects']['items']
  imageSrc: string
}

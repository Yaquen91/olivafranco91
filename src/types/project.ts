import type { Dictionary } from '@/i18n/dictionary'

export type Project = {
  id: keyof Dictionary['projects']['items']
  imageSrc: string
}

import es from './locales/es.json'

const dictionaries = { es }

export type Locale = keyof typeof dictionaries
export type Dictionary = typeof es

export const defaultLocale: Locale = 'es'

export function getDictionary(locale: Locale = defaultLocale): Dictionary {
  return dictionaries[locale]
}

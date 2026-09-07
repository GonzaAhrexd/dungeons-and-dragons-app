import { useLanguageStore } from '../store/langs.store'
import type { Language } from '../store/langs.store'
import type { PluralWords } from '../interfaces' // ajustá el path

type Translations = Record<Language, object>

function isPluralWords(v: unknown): v is PluralWords {
  return typeof v === 'object' && v !== null && 'singular' in v && 'plural' in v
}

type DeepResolve<T> = T extends string
  ? (values?: Record<string, unknown>) => string
  : T extends PluralWords
    ? (count: number, values?: Record<string, unknown>) => string
    : { [K in keyof T]: DeepResolve<T[K]> }

function interpolate(
  template: string,
  values?: Record<string, unknown>,
): string {
  if (!values) return template
  return Object.entries(values).reduce(
    (str, [k, v]) => str.replace(`{${k}}`, String(v)),
    template,
  )
}

function buildT<T>(obj: T): DeepResolve<T> {
  return Object.fromEntries(
    Object.entries(obj as object).map(([key, value]) => [
      key,
      typeof value === 'string'
        ? (values?: Record<string, unknown>) => interpolate(value, values)
        : isPluralWords(value)
          ? (count: number, values?: Record<string, unknown>) =>
              interpolate(count === 1 ? value.singular : value.plural, values)
          : buildT(value),
    ]),
  ) as DeepResolve<T>
}

export function useText<T extends Translations>(translations: T) {
  const language = useLanguageStore(s => s.language)
  return buildT<T[typeof language]>(translations[language])
}

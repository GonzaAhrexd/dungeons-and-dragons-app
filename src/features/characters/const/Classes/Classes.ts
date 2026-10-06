import type { SelectOption } from '@/shared/ui/Select/Select'
import { useLanguageStore } from '@/features/langs/store/langs.store'
import { CLASSES, classesText } from './Classes.langs'

export const useClassOptions = (): SelectOption[] => {
  const language = useLanguageStore(s => s.language)
  return CLASSES.map(value => ({ value, label: classesText[language][value] }))
}

import type { SelectOption } from '@/shared/ui/Select/Select'
import { RACES, racesText } from './Races.langs'
import { useLanguageStore } from '@/features/langs/store/langs.store'

export const useRaceOptions = (): SelectOption[] => {
  const language = useLanguageStore(s => s.language)
  return RACES.map(value => ({ value, label: racesText[language][value] }))
}

import type { LanguagesText } from '@/features/langs/interfaces'

interface HeroHistoryTexts {
  heroHistory: string
  readMore: string
  showLess: string
  editHistory: string
}

export const heroHistoryText: LanguagesText<HeroHistoryTexts> = {
  en: {
    heroHistory: "Hero's Personal History",
    readMore: 'READ MORE',
    showLess: 'SHOW LESS',
    editHistory: 'EDIT HISTORY',
  },
  es: {
    heroHistory: 'Historia Personal del Héroe',
    readMore: 'SEGUIR LEYENDO',
    showLess: 'MOSTRAR MENOS',
    editHistory: 'EDITAR HISTORIA',
  },
}

import type { LanguagesText } from '@/features/langs/interfaces'

interface HeroStoryTexts {
  heroStory: string
  readMore: string
  showLess: string
  editStory: string
}

export const heroStoryText: LanguagesText<HeroStoryTexts> = {
  en: {
    heroStory: "Hero's Personal History",
    readMore: 'READ MORE',
    showLess: 'SHOW LESS',
    editStory: 'EDIT',
  },
  es: {
    heroStory: 'Historia Personal del Héroe',
    readMore: 'SEGUIR LEYENDO',
    showLess: 'MOSTRAR MENOS',
    editStory: 'EDITAR',
  },
}

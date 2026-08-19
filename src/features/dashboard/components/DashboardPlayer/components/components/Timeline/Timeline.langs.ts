import type { LanguagesText } from '@/features/langs/interfaces'

interface TimelineTexts {
  campaignTimeline: string
  expandHistory: string
}

export const timelineText: LanguagesText<TimelineTexts> = {
  en: {
    campaignTimeline: 'Campaign Timeline',
    expandHistory: 'EXPAND FULL HISTORY',
  },
  es: {
    campaignTimeline: 'Cronología de la Campaña',
    expandHistory: 'EXPANDIR HISTORIAL COMPLETO',
  },
}

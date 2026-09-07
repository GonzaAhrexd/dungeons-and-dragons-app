import type { LanguagesText } from '@/features/langs/interfaces'

interface TimelineTexts {
  campaignTimeline: string
  expandHistory: string
}

export const timelineText: LanguagesText<TimelineTexts> = {
  en: {
    campaignTimeline: 'Timeline',
    expandHistory: 'EXPAND FULL HISTORY',
  },
  es: {
    campaignTimeline: 'Cronología',
    expandHistory: 'EXPANDIR HISTORIAL COMPLETO',
  },
}

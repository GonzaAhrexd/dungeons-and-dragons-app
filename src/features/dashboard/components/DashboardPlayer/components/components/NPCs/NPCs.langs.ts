import type { LanguagesText } from '@/features/langs/interfaces'

interface NPCsTexts {
  campaignNPCs: string
}

export const npcsText: LanguagesText<NPCsTexts> = {
  en: {
    campaignNPCs: 'Campaign NPCs',
  },
  es: {
    campaignNPCs: 'NPCs de la Campaña',
  },
}

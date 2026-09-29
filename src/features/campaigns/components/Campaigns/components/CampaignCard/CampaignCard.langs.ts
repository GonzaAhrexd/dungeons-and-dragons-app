import type { LanguagesText } from '@/features/langs/interfaces'

interface CampaignCardText {
  inactive: string
}

export const campaignCardText: LanguagesText<CampaignCardText> = {
  en: {
    inactive: 'Inactive',
  },
  es: {
    inactive: 'Inactiva',
  },
}

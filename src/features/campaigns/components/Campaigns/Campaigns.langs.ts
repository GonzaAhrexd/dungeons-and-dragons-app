import type { LanguagesText } from '@/features/langs/interfaces'

interface CampaignsTexts {
  activeCampaigns: string
}

export const campaignsText: LanguagesText<CampaignsTexts> = {
  en: {
    activeCampaigns: 'Active campaigns',
  },
  es: {
    activeCampaigns: 'Campañas activas',
  },
}

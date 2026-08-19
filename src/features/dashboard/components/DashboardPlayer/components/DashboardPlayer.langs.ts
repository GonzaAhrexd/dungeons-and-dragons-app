import type { LanguagesText } from '@/features/langs/interfaces'

interface DashboardPlayerTexts {
  backToCampaigns: string
}

export const dashboardPlayerText: LanguagesText<DashboardPlayerTexts> = {
  en: {
    backToCampaigns: 'Back to Campaigns',
  },
  es: {
    backToCampaigns: 'Volver a Campañas',
  },
}

import type { LanguagesText } from '@/features/langs/interfaces'

interface CampaignsTexts {
  activeCampaigns: string
  subtitle: string
  filterActive: string
  filterRecent: string
  filterFavorites: string
  filterAlphabetical: string
  filterCreation: string
  expandLegend: string
}

export const campaignsText: LanguagesText<CampaignsTexts> = {
  en: {
    activeCampaigns: 'Active campaigns',
    subtitle: 'Chronicles of your ongoing legend.',
    filterActive: 'Active',
    filterRecent: 'Recent',
    filterFavorites: 'Favorites',
    filterAlphabetical: 'Alphabetical',
    filterCreation: 'Creation',
    expandLegend: 'Expand Your Legend',
  },
  es: {
    activeCampaigns: 'Campañas activas',
    subtitle: 'Crónicas de tu leyenda en curso.',
    filterActive: 'Activas',
    filterRecent: 'Recientes',
    filterFavorites: 'Favoritas',
    filterAlphabetical: 'Alfabético',
    filterCreation: 'Creación',
    expandLegend: 'Expande tu Leyenda',
  },
}


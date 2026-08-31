import type { LanguagesText } from '@/features/langs/interfaces'

interface CampaignsTexts {
  activeCampaigns: string
  subtitle: string
  filterActive: string
  filterOwned: string
  filterFavorites: string
  filterAlphabetical: string
  filterCreation: string
  expandLegend: string
  loading: string
  error: string
}

export const campaignsText: LanguagesText<CampaignsTexts> = {
  en: {
    activeCampaigns: 'Active campaigns',
    subtitle: 'Chronicles of your ongoing legend.',
    filterActive: 'Active',
    filterOwned: 'Owned',
    filterFavorites: 'Favorites',
    filterAlphabetical: 'Alphabetical',
    filterCreation: 'Creation',
    expandLegend: 'Expand Your Legend',
    loading: 'Loading...',
    error: 'Error loading campaigns.',
  },
  es: {
    activeCampaigns: 'Campañas activas',
    subtitle: 'Crónicas de tu leyenda en curso.',
    filterActive: 'Activas',
    filterOwned: 'Propios',
    filterFavorites: 'Favoritas',
    filterAlphabetical: 'Alfabético',
    filterCreation: 'Creación',
    expandLegend: 'Expande tu Leyenda',
    loading: 'Cargando...',
    error: 'Error al cargar las campañas.',
  },
}

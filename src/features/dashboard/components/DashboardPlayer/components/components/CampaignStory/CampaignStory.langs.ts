import type { LanguagesText } from '@/features/langs/interfaces'

interface CampaignTexts {
  realmMap: string
  readMore: string
  showLess: string
}

export const campaignText: LanguagesText<CampaignTexts> = {
  en: {
    realmMap: 'Map',
    readMore: 'READ MORE',
    showLess: 'SHOW LESS',
  },
  es: {
    realmMap: 'Mapa',
    readMore: 'SEGUIR LEYENDO',
    showLess: 'MOSTRAR MENOS',
  },
}

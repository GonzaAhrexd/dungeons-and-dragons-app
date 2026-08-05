import type { LanguagesText } from '@/features/langs/interfaces'

interface CampaignAddText {

  title: string
  description: string
  addCampaign: string

  joinCampaign: string
}

export const campaignsText: LanguagesText<CampaignAddText> = {
  en: {
    title: 'Expand Your Legend',
    description: 'Create or join a campaign to embark on epic quests and forge unforgettable stories.',
    addCampaign: 'Create Campaign',
    joinCampaign: 'Join Campaign',
  },
  es: {
    title: 'Expande tu leyenda',
    description: 'Creá tu propia crónica épica o unite a la aventura de alguien más.',
    addCampaign: 'Crear campaña',
    joinCampaign: 'Unirse a campaña',

  },
}

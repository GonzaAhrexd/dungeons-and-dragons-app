import type { LanguagesText } from '@/features/langs/interfaces'

interface CampaignJoinTexts {
  joinCampaign: string
  joinCampaignDescription: string
  codeLabel: string
  confirm: string
}

export const campaignJoinText: LanguagesText<CampaignJoinTexts> = {
  en: {
    joinCampaign: 'Join Campaign',
    joinCampaignDescription: 'Join a new adventure.',
    codeLabel: 'Campaign Key',
    confirm: 'Join',
  },
  es: {
    joinCampaign: 'Unirse a Campaña',
    joinCampaignDescription: 'Únete a una nueva aventura.',
    codeLabel: 'Clave de campaña',
    confirm: 'Unirse',
  },
}

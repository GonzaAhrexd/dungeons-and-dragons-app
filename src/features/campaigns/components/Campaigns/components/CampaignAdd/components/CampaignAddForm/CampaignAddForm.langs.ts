import type { LanguagesText } from '@/features/langs/interfaces'

interface CampaignsAddFormTexts {
  addCampaign: string
  addCampaignDescription: string
  nameLabel: string
  descriptionLabel: string
  confirm: string
}

export const campaignAddFormText: LanguagesText<CampaignsAddFormTexts> = {
  en: {
    addCampaign: 'Add Campaign',
    addCampaignDescription: 'Create a new campaign for your players.',
    nameLabel: 'Name',
    descriptionLabel: 'Description',
    confirm: 'Confirm',
  },
  es: {
    addCampaign: 'Agregar Campaña',
    addCampaignDescription: 'Crea una nueva campaña para tus jugadores.',
    nameLabel: 'Nombre',
    descriptionLabel: 'Descripción',
    confirm: 'Confirmar',
  },
}

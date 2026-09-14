import type { LanguagesText } from '@/features/langs/interfaces'

interface CampaignInfoText {
  statusLabel: string
  editFormTitle: string
  editFormHeading: string
  editCampaignTitle: string
  editCampaignDescription: string
  saveCampaign: string
  stats: {
    players: string
    session: string
    nextSession: string
    playingFor: string
  }
}

export const campaignInfoText: LanguagesText<CampaignInfoText> = {
  en: {
    statusLabel: 'IN CAMPAIGN',
    editFormTitle: 'EDIT CAMPAIGN',
    editFormHeading: 'Campaign data',
    editCampaignTitle: 'Title',
    editCampaignDescription: 'Description',
    saveCampaign: 'Save changes',
    stats: {
      players: 'PLAYERS',
      session: 'SESSION',
      nextSession: 'NEXT SESSION',
      playingFor: 'Playing for: {time}',
    },
  },
  es: {
    statusLabel: 'EN CAMPAÑA',
    editFormTitle: 'EDITAR CAMPAÑA',
    editFormHeading: 'Datos de la campaña',
    editCampaignTitle: 'Título',
    editCampaignDescription: 'Descripción',
    saveCampaign: 'Guardar cambios',
    stats: {
      players: 'JUGADORES',
      session: 'SESIÓN',
      nextSession: 'PRÓXIMA SESIÓN',
      playingFor: 'Jugando hace: {time}',
    },
  },
}

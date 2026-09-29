import type { LanguagesText } from '@/features/langs/interfaces'

interface SettingsSectionText {
  settings: string
  loading: string
  activeCampaign: string
  DeleteButton: string
  deletionDisclaimer: string
  campaignNameInputLabel: string
  confirmButton: string
  CancelButton: string
}

export const settingsSectionText: LanguagesText<SettingsSectionText> = {
  en: {
    settings: 'Settings',
    loading: 'Loading...',
    activeCampaign: 'Active campaign',
    DeleteButton: 'Delete campaign',
    deletionDisclaimer:
      'Are you sure you want to delete this campaign? This action is irreversible and cannot be undone. You will lose all associated content, including spells, bars, settings, and remove all characters and users associated with the campaign.',
    campaignNameInputLabel: 'Introduce the Campaign Name to confirm',
    confirmButton: 'Confirm',
    CancelButton: 'Cancel',
  },
  es: {
    settings: 'Configuración',
    loading: 'Cargando...',
    activeCampaign: 'Campaña activa',
    DeleteButton: 'Eliminar campaña',
    deletionDisclaimer:
      '¿Estás seguro de querer eliminar esta campaña? Esta acción es irreversible y no puede deshacerse. Perderás TODO el contenido asociado, incluyendo hechizos, barras, configuraciones y quitarás a los personajes y usuarios asociados a la campaña.',
    campaignNameInputLabel: 'Introduce el nombre de la campaña para confirmar',
    confirmButton: 'Confirmar',
    CancelButton: 'Cancelar',
  },
}

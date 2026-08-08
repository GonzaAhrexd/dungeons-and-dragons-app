import type { LanguagesText } from '@/features/langs/interfaces'

interface GameMasterDashboardText {
  addPlayer: string
  description: string
  addPlayersForm: {
    usernamePlaceholder: string
    buttonTitle: string
  }
}

export const gameMasterDashboardText: LanguagesText<GameMasterDashboardText> = {
  en: {
    addPlayer: 'Add new player',
    description: 'Extend an invitation to a worthy soul to join your campaign.',
    addPlayersForm: {
      usernamePlaceholder: 'Enter player username',
      buttonTitle: 'Send invitation',
    },
  },
  es: {
    addPlayer: 'Agregar nuevo jugador',
    description:
      'Extende una invitación a un alma digna para que se una a tu campaña.',
    addPlayersForm: {
      usernamePlaceholder: 'Ingresa el nombre de usuario',
      buttonTitle: 'Enviar invitación',
    },
  },
}

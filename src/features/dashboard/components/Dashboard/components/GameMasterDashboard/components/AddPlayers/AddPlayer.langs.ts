import type { LanguagesText } from '@/features/langs/interfaces'

interface GameMasterDashboardText {
  addPlayer: string
  description: string
  addPlayersForm: {
    usernameLabel: string
    usernamePlaceholder: string
    buttonTitle: string
    helperText: string
  }
}

export const gameMasterDashboardText: LanguagesText<GameMasterDashboardText> = {
  en: {
    addPlayer: 'Add new player',
    description: 'Extend an invitation to a worthy soul to join your campaign.',
    addPlayersForm: {
      usernameLabel: 'Adventurer name or email address',
      usernamePlaceholder: 'Enter player username',
      buttonTitle: 'Send invitation',
      helperText:
        'You need to wait for the guest to accept the invitation before they can access the campaign.',
    },
  },
  es: {
    addPlayer: 'Agregar nuevo jugador',
    description:
      'Extende una invitación a un alma digna para que se una a tu campaña.',
    addPlayersForm: {
      usernameLabel: 'Nombre de aventurero o correo electrónico',
      usernamePlaceholder: 'Ingresa el nombre de usuario',
      buttonTitle: 'Enviar invitación',
      helperText:
        'Debes esperar a que el invitado acepte la invitación antes de que puedan acceder a la campaña.',
    },
  },
}

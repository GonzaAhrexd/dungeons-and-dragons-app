import type { LanguagesText, PluralWords } from '@/features/langs/interfaces'

interface ActivePlayersText {
  activePlayers: string
  pendingInvitations: string
  actives: PluralWords
  awaitingConfirmation: string
}

export const activePlayersText: LanguagesText<ActivePlayersText> = {
  en: {
    activePlayers: 'Active Players',
    pendingInvitations: 'Pending Invitations',
    actives: {
      singular: '{total} Active',
      plural: '{total} Actives',
    },
    awaitingConfirmation: 'to be confirmed',
  },
  es: {
    activePlayers: 'Jugadores Activos',
    pendingInvitations: 'Invitaciones Pendientes',
    actives: {
      singular: '{total} Activo',
      plural: '{total} Activos',
    },
    awaitingConfirmation: 'por confirmar',
  },
}

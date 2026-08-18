import type { LanguagesText } from '@/features/langs/interfaces'

interface ActivePlayersText {
  activePlayers: string
  pendingInvitations: string
  
}

export const activePlayersText: LanguagesText<ActivePlayersText> = {
  en: {
    activePlayers: 'Active Players',
    pendingInvitations: 'Pending Invitations',
  },
  es: {
    activePlayers: 'Jugadores Activos',
    pendingInvitations: 'Invitaciones Pendientes',
  },
}

import type { LanguagesText, PluralWords } from '@/features/langs/interfaces'

interface PlayerStateText {
  playerState: string
  totalMembers: PluralWords
  pendingInvitations: PluralWords
}

export const playerStateText: LanguagesText<PlayerStateText> = {
  en: {
    playerState: 'Players State',
    totalMembers: {
      singular: '{totalMembers} Total member',
      plural: '{totalMembers} Total members',
    },
    pendingInvitations: {
      singular: '{pendingInvitations} Pending invitation',
      plural: '{pendingInvitations} Pending invitations',
    },
  },
  es: {
    playerState: 'Estado de jugadores',
    totalMembers: {
      singular: '{totalMembers} Miembro total',
      plural: '{totalMembers} Miembros totales',
    },
    pendingInvitations: {
      singular: '{pendingInvitations} Invitación pendiente',
      plural: '{pendingInvitations} Invitaciones pendientes',
    },
  },
}

import type { LanguagesText, PluralWords } from '@/features/langs/interfaces'

interface ActivePlayersText {
  activePlayers: string
  pendingInvitations: string
  actives: PluralWords
  awaitingConfirmation: PluralWords
  freeSlotTitle: string
  availableSlots: PluralWords
  resend: string
  pendingAcceptance: string
  levelShort: string
  sheet: string
  options: string
  cancel: string
  defaultSentAt: string
}

export const activePlayersText: LanguagesText<ActivePlayersText> = {
  en: {
    activePlayers: 'Active Players',
    pendingInvitations: 'Pending Invitations',
    actives: {
      singular: '{total} ACTIVE',
      plural: '{total} ACTIVES',
    },
    awaitingConfirmation: {
      singular: '{count} to confirm',
      plural: '{count} to confirm',
    },
    freeSlotTitle: 'FREE ADVENTURER SLOT',
    availableSlots: {
      singular: '{count} slot available in party',
      plural: '{count} slots available in party',
    },
    resend: 'RESEND',
    pendingAcceptance: 'Awaiting acceptance',
    levelShort: 'LVL.',
    sheet: 'Character Sheet',
    options: 'Options',
    cancel: 'Cancel',
    defaultSentAt: 'Sent 2 hours ago',
  },
  es: {
    activePlayers: 'Jugadores Activos',
    pendingInvitations: 'Invitaciones Pendientes',
    actives: {
      singular: '{total} ACTIVO',
      plural: '{total} ACTIVOS',
    },
    awaitingConfirmation: {
      singular: '{count} por confirmar',
      plural: '{count} por confirmar',
    },
    freeSlotTitle: 'ESPACIO LIBRE DE AVENTURERO',
    availableSlots: {
      singular: '{count} cupo disponible en el grupo',
      plural: '{count} cupos disponibles en el grupo',
    },
    resend: 'REENVIAR',
    pendingAcceptance: 'En espera de aceptación',
    levelShort: 'NV.',
    sheet: 'Ficha',
    options: 'Opciones',
    cancel: 'Cancelar',
    defaultSentAt: 'Enviada hace 2 horas',
  },
}


import type { LanguagesText } from '@/features/langs/interfaces'

interface CampaignInvitationsText {
  title: string
  description: string
  acceptInvitation: string
  declineInvitation: string
}

export const campaignsInvitationsText: LanguagesText<CampaignInvitationsText> = {
  en: {
    title: 'Campaign Invitations',
    description:
      'You have been invited to join the following campaigns. Accept or decline the invitations below.',
    acceptInvitation: 'Accept Invitation',
    declineInvitation: 'Decline Invitation',
  },
  es: {
    title: 'Invitaciones a Campañas',
    description:
      'Has sido invitado a unirte a las siguientes campañas. Acepta o rechaza las invitaciones a continuación.',
    acceptInvitation: 'Aceptar Invitación',
    declineInvitation: 'Rechazar Invitación',
  },
}

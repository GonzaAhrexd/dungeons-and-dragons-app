import type { LanguagesText } from '@/features/langs/interfaces'

interface CampaignInvitationsText {
  title: string
  description: string
  invitatedBy: string
  acceptInvitation: string
  declineInvitation: string
}

export const campaignsInvitationsText: LanguagesText<CampaignInvitationsText> =
  {
    en: {
      title: 'Invitations',
      description:
        'Accept or decline the invitations below.',
      invitatedBy: 'Invited by',
      acceptInvitation: 'Accept Invitation',
      declineInvitation: 'Decline Invitation',
    },
    es: {
      title: 'Invitaciones',
      invitatedBy: 'Invitado por',
      description:
        'Acepta o rechaza las invitaciones a continuación.',
      acceptInvitation: 'Aceptar Invitación',
      declineInvitation: 'Rechazar Invitación',
    },
  }

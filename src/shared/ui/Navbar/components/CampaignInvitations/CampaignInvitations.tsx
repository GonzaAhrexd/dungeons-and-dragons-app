import './CampaignInvitations.css'
import {
  useAcceptInvitation,
  useGetInvitations,
} from '@/features/campaigns/hooks'
import { useText } from '@/features/langs/hooks/useText'
import { campaignsInvitationsText } from './CampaignInvitations.langs'
import { Button } from '@/shared/ui/Button/Button'
import { Icon } from '@/shared/ui/Icon/Icon'
import { useRejectInvitation } from '@/features/campaigns/hooks/useRejectInvitation'
export const CampaignInvitations = () => {
  const text = useText(campaignsInvitationsText)

  const { data: invitations, isLoading, isError } = useGetInvitations()

  const { mutateAsync: acceptInvitation } = useAcceptInvitation()
  const { mutateAsync: rejectInvitation } = useRejectInvitation()

  const handleAcceptInvitation = async (invitationId: string) => {
    await acceptInvitation({ id: invitationId })
  }

  const handleDeclineInvitation = async (invitationId: string) => {
    await rejectInvitation({ id: invitationId })
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error loading invitations.</div>
  }

  return (
    <div className="cmp-campaign-invitations">
      <div className="header">
        <Icon icon="fa-solid fa-scroll" />
        <h1>{text.title()}</h1>
      </div>
      <p>{text.description()}</p>

      <div className="invitations-list">
        {invitations?.map(invitation => (
          <div key={invitation.id} className="invitation">
            <div className="invitation-header">
              <h2>{invitation.campaignName}</h2>
              <p>
                {text.invitatedBy()}:
                <span> {invitation.gamemasterUsername}</span>
              </p>
            </div>
            <div className="invitation-actions">
              <Button
                icon="fa-solid fa-check"
                handlingClass="accept"
                loader
                onClick={() => handleAcceptInvitation(invitation.id)}
              />
              <Button
                icon="fa-solid fa-times"
                handlingClass="decline"
                loader
                onClick={() => handleDeclineInvitation(invitation.id)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

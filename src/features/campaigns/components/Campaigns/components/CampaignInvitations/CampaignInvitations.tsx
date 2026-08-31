import './CampaignInvitations.css'
import {
  useAcceptInvitation,
  useGetInvitations,
} from '@/features/campaigns/hooks'
import { useText } from '@/features/langs/hooks/useText'
import { campaignsInvitationsText } from './CampaignInvitations.langs'
import { Button } from '@/shared/ui/Button/Button'
export const CampaignInvitations = () => {
  const text = useText(campaignsInvitationsText)

  const { data: invitations, isLoading, isError } = useGetInvitations()

  const { mutateAsync: acceptInvitation } = useAcceptInvitation()

  const handleAcceptInvitation = async (invitationId: string) => {
    await acceptInvitation({ id: invitationId })
  }

  const handleDeclineInvitation = (invitationId: string) => {
    return () => {
      console.log(`Decline invitation with ID: ${invitationId}`)
      // Implement the logic to decline the invitation here
    }
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error loading invitations.</div>
  }

  return (
    <div className="cmp-campaign-invitations">
      <h1>{text.title()}</h1>
      <p>{text.description()}</p>

      <div className="invitations-list">
        {invitations?.map(invitation => (
          <div key={invitation.id} className="invitation">
            <div className="invitation-header">
              <h2>{invitation.campaignName}</h2>
              <p>Invited by: {invitation.gamemasterUsername}</p>
            </div>
            <div className="invitation-actions">
              <Button
                icon="fa-solid fa-check"
                handlingClass="accept"
                onClick={() => handleAcceptInvitation(invitation.id)}
              />
              <Button
                icon="fa-solid fa-times"
                handlingClass="decline"
                onClick={handleDeclineInvitation(invitation.id)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

import { useGetCampaignById } from '@/features/campaigns/hooks'
import { AddPlayers } from '../AddPlayers/AddPlayers'
import { PlayersList, PlayerState } from './components'
import './UserSection.css'
import { useCampaignStore } from '@/features/campaigns/store/campaign.store'

export const UserSection = () => {
  const campaingId = useCampaignStore(state => state.currentCampaignId)
  const { data: campaign, isLoading, error } = useGetCampaignById(campaingId)

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error: {error.message}</div>
  }
  return (
    <div className="cmp-user-section">
      <PlayersList players={campaign?.players || []} />

      <div className="section-sidebar">
        <AddPlayers />
        <PlayerState
          totalMembers={campaign?.players.length || 0}
          pendingInvitations={campaign?.invitations.length || 0}
        />
      </div>
    </div>
  )
}

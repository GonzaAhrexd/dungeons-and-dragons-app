import './HomeSection.css'
import { CampaignInfo, AddPlayers, ActivePlayers, CampaignLogs } from '../'
import { useCampaignStore } from '@/features/campaigns/store/campaign.store'
import { useGetCampaignById } from '@/features/campaigns/hooks/useGetCampaignById'
export const HomeSection = () => {
  const campaignId = useCampaignStore(state => state.currentCampaignId)
  const players = [
    'Pepe',
    'Papa',
    'Popo',
    'Popo',
    'Popo',
    'Popo',
    'Popo',
    'Popo',
  ]
  const { data: campaign, isLoading, error } = useGetCampaignById(campaignId)
  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div className="cmp-home-section">
      <CampaignInfo
        title={campaign?.name || ''}
        description={campaign?.description || ''}
      />
      <div className="quick-view">
        <CampaignLogs />
        <AddPlayers />
        <ActivePlayers
          players={players}
          invitations={campaign?.invitations || []}
        />
      </div>
    </div>
  )
}

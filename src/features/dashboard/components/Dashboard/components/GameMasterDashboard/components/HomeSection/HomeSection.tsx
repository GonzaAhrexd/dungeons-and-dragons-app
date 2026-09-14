import './HomeSection.css'
import { CampaignInfo, AddPlayers, ActivePlayers, CampaignLogs } from '../'
import { useCampaignStore } from '@/features/campaigns/store/campaign.store'
import { useGetCampaignById } from '@/features/campaigns/hooks/useGetCampaignById'
import { useGameMasterStore } from '@/features/dashboard/components/Dashboard/store/gamemaster.store'

export const HomeSection = () => {
  const campaignId = useCampaignStore(state => state.currentCampaignId)
  const { data: campaign, isLoading, error } = useGetCampaignById(campaignId)
  const mockData = useGameMasterStore(state => state.mockData)

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
        players={campaign?.players.length || 0}
        playersMax={mockData.playersMax}
        session={mockData.session}
        act={mockData.act}
        nextSessionDate={mockData.nextSessionDate}
      />
      <div className="quick-view">
        <AddPlayers />
        <ActivePlayers
          players={campaign?.players || []}
          invitations={campaign?.invitations || []}
        />
        <CampaignLogs />
      </div>
    </div>
  )
}

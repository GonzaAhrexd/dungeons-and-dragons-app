import { Redirect } from 'wouter'
import './Dashboard.css'
import { useCampaignStore } from '@/features/campaigns/store/campaign.store'
import { GameMasterDashboard } from './components'
import { DashboardPlayer } from '../DashboardPlayer/components/DashboardPlayer'

export const Dashboard = () => {
  const campaignId = useCampaignStore(state => state.currentCampaignId)
  const isGameMaster = useCampaignStore(state => state.isGameMaster)

  if (!campaignId) {
    return <Redirect to={'/campaigns'} />
  }

  return (
    <div className="cmp-dashboard">
      {isGameMaster ? <GameMasterDashboard /> : <DashboardPlayer />}
    </div>
  )
}

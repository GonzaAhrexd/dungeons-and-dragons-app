import { Redirect } from 'wouter'
import './Dashboard.css'
// import { ActiveCampaigns } from './components/ActiveCampaigns/ActiveCampaigns'
// import { MyCharacters } from './components/MyCharacters/MyCharacters'
import { useCampaignStore } from '@/features/campaigns/store/campaign.store'
import { GameMasterDashboard } from './components'

export const Dashboard = () => {
  const campaignId = useCampaignStore(state => state.currentCampaignId)

  if (!campaignId) {
    return <Redirect to={'/campaigns'} />
  }

  return (
    <div className="cmp-dashboard">
      <GameMasterDashboard />
      {/* <MyCharacters />
      <ActiveCampaigns /> */}
    </div>
  )
}

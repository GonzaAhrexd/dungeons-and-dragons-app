import './Dashboard.css'
import { ActiveCampaigns } from './components/ActiveCampaigns/ActiveCampaigns'
import { MyCharacters } from './components/MyCharacters/MyCharacters'

export const Dashboard = () => {
  return (
    <div className="cmp-dashboard">
      <MyCharacters />
      <ActiveCampaigns />
    </div>
  )
}

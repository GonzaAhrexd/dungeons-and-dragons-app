import { useText } from '@/features/langs/hooks/useText'
import { gameMasterDashboardText } from './GameMaster.langs'
import './GameMasterDashboard.css'
import { AddPlayers } from './components/AddPlayers/AddPlayers'
export const GameMasterDashboard = () => {
  const text = useText(gameMasterDashboardText)
  return (
    <div className="cmp-game-master-dashboard">
      <h1>{text.title()}</h1>
      <p>{text.description()}</p>

      <div className="dashboard-content">
        <AddPlayers />
      </div>
    </div>
  )
}

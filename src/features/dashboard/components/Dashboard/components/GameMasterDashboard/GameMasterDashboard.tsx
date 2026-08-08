import './GameMasterDashboard.css'
import { AddPlayers } from './components/AddPlayers/AddPlayers'
export const GameMasterDashboard = () => {
  return (
    <div className="cmp-game-master-dashboard">
      <h1>Game Master Dashboard</h1>
      <p>
        Welcome to the Game Master Dashboard! Here you can manage your
        campaigns, characters, and more.
      </p>

      <div className="dashboard-content">
        <AddPlayers />
      </div>
    </div>
  )
}

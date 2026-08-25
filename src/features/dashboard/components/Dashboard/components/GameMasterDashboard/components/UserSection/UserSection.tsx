import { AddPlayers } from '../AddPlayers/AddPlayers'
import { PlayersList, PlayerState } from './components'
import './UserSection.css'

export const UserSection = () => {
  return (
    <div className="cmp-user-section">
      <PlayersList />

      <div className="section-sidebar">
        <AddPlayers />
        <PlayerState />
      </div>
    </div>
  )
}

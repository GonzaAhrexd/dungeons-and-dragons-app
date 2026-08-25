import { Input } from '@/shared/ui/Input/Input'
import './PlayersList.css'
import { Button } from '@/shared/ui/Button/Button'
export const PlayersList = () => {
  const users = [
    {
      id: 1,
      name: 'Player 1',
      username: 'player1',
    },
    {
      id: 2,
      name: 'Player 2',
      username: 'player2',
    },
  ]

  return (
    <div className="cmp-players-list">
      <div className="header">
        <h2>Players</h2>
        <Input name="search" placeholder="Search players..." />
      </div>

      <div className="player-divider"></div>

      <div className="players">
        {users.map(user => (
          <div key={user.id} className="player">
            <div className="player-info">
              <h2>{user.name}</h2>
              <h3>{user.username}</h3>
            </div>
            <div className="character-info"></div>
            <div className="player-actions">
              <Button icon="fa-solid fa-trash" theme="secondary" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

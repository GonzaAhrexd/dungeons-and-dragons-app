import { Input } from '@/shared/ui/Input/Input'
import './PlayersList.css'
import { Button } from '@/shared/ui/Button/Button'
import { useText } from '@/features/langs/hooks/useText'
import { playerListText } from './PlayerList.langs'

export const PlayersList = () => {
  const text = useText(playerListText)

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
        <h2>{text.title()}</h2>
        <Input name="search" placeholder={text.searchPlaceholder()} />
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

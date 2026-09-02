import { Input } from '@/shared/ui/Input/Input'
import './PlayersList.css'
import { Button } from '@/shared/ui/Button/Button'
import { useText } from '@/features/langs/hooks/useText'
import { playerListText } from './PlayerList.langs'
import type { Players } from '@/features/campaigns/interfaces'

interface PlayersListProps {
  players: Players[]
}
export const PlayersList = ({ players }: PlayersListProps) => {
  const text = useText(playerListText)

  return (
    <div className="cmp-players-list">
      <div className="header">
        <h2>{text.title()}</h2>
        <Input name="search" placeholder={text.searchPlaceholder()} />
      </div>

      <div className="player-divider"></div>

      <div className="players">
        {players.map(player => (
          <div key={player.playerId} className="player">
            <div className="player-info">
              <h2>{player.username}</h2>
              <h3>{player.username}</h3>
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

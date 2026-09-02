import './ActivePlayers.css'
import { Icon } from '@/shared/ui/Icon/Icon'
import type { Invitations, Players } from '@/features/campaigns/interfaces/'
import { useText } from '@/features/langs/hooks/useText'
import { activePlayersText } from './ActivePlayers.langs'
interface ActivePlayersProps {
  invitations: Invitations[]
  players: Players[]
}

export const ActivePlayers = ({ invitations, players }: ActivePlayersProps) => {
  const text = useText(activePlayersText)

  const visible = players.length > 6 ? 5 : 6
  const hidden = players.length - visible

  return (
    <div className="cmp-active-players">
      <div className="label">
        <Icon icon="fa-solid fa-users" />
        <h1>{text.activePlayers()}</h1>
      </div>
      <div className="players-list">
        {players.slice(0, visible).map(player => (
          <div className="player" key={player.playerId}>
            <Icon icon="fa-solid fa-user" />
            <div className="player-info">
              {/* TODO: Reemplazar por nombre de pj y clase cuando esté disponible en el backend */}
              <h2>{player.username}</h2>
              <h3>Class</h3>
            </div>
          </div>
        ))}
        {hidden > 0 && (
          <div className="player">
            <Icon icon="fa-solid fa-user" />
            <h2>+{hidden}</h2>
          </div>
        )}
      </div>
      <h1>{text.pendingInvitations()}</h1>
      <div className="pending-invitations">
        {invitations.map(invitation => (
          <div className="player" key={invitation.invitationId}>
            <Icon icon="fa-solid fa-user" />
            <div className="player-info">
              <h2>{invitation.username}</h2>
              <h3>{invitation.state}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

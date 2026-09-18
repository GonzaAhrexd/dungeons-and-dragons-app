import './ActivePlayers.css'
import { Icon } from '@/shared/ui/Icon/Icon'
import { useText } from '@/features/langs/hooks/useText'
import { activePlayersText } from './ActivePlayers.langs'
import type { Players, Invitations } from '@/features/campaigns/interfaces'
import { Button } from '@/shared/ui/Button/Button'

export interface ActivePlayersProps {
  players: Players[]
  invitations: Invitations[]
  onCancelInvitation?: (id: string) => void
}

export const ActivePlayers = ({
  invitations = [],
  players = [],
  onCancelInvitation,
}: ActivePlayersProps) => {
  // TODO: Completar valores cuando estén disponibles en el backend
  const text = useText(activePlayersText)

  // const getFillClass = (current: number, max: number) => {
  //   const pct = max > 0 ? (current / max) * 100 : 100
  //   if (pct > 75) return 'fill-green'
  //   if (pct > 35) return 'fill-amber'
  //   return 'fill-red'
  // }

  const avatar = '/avatar.png'

  return (
    <div className="cmp-active-players">
      {/* Header 1: Active Players */}
      <div className="label">
        <div className="label-title">
          <Icon icon="fa-solid fa-users" />
          <h1>{text.activePlayers()}</h1>
        </div>
        <span className="label-count">
          {text.actives(players.length, { total: players.length })}
        </span>
      </div>

      {/* Grid of Players */}
      <div className="players-grid">
        {players.map((player, index) => {
          // const fallback = DEFAULT_PROFILES[index % DEFAULT_PROFILES.length]
          // const name =
          //   player.characterName || player.username || fallback.characterName
          // const level = player.level ?? fallback.level
          // const characterClass =
          //   player.characterClass || fallback.characterClass
          // const race = player.race || fallback.race
          // const hp = player.hp || fallback.hp
          // const avatar = player.avatarUrl || '/avatar.png'
          // const hpPct = Math.min(
          //   100,
          //   Math.max(0, Math.round((hp.current / hp.max) * 100)),
          // )

          return (
            <div className="player-card" key={player.playerId || index}>
              <div className="player-avatar-box">
                <img
                  src={avatar}
                  alt={player.username}
                  className="player-avatar-img"
                />
              </div>
              <div className="player-body">
                <div className="player-header">
                  <div className="player-name-wrapper">
                    <span className="player-name">{player.username}</span>
                    <span className="player-level-badge">
                      {text.levelShort()} 0 {/* { player.level } */}
                    </span>
                  </div>
                  <div className="player-actions">
                    <button
                      type="button"
                      className="card-action-btn"
                      title={text.sheet()}
                    >
                      <Icon icon="fa-regular fa-file-lines" />
                    </button>
                    <button
                      type="button"
                      className="card-action-btn"
                      title={text.options()}
                    >
                      <Icon icon="fa-solid fa-ellipsis-vertical" />
                    </button>
                  </div>
                </div>
                <div className="player-class-race">
                  {/* {characterClass} • {race} */}
                </div>
                <div className="player-hp-section">
                  <div className="hp-bar-track">
                    <div
                    // className={`hp-bar-fill ${getFillClass(hp.current, hp.max)}`}
                    // style={{ width: `${hpPct}%` }}
                    />
                  </div>
                  <span className="hp-text">
                    {/* {hp.current}/{hp.max} HP */}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Header 2: Pending Invitations */}
      <div className="section-label">
        <div className="label-title">
          <Icon icon="fa-regular fa-clock" />
          <h1>{text.pendingInvitations()}</h1>
        </div>
        {/* <span className="label-badge-muted">
          {text.awaitingConfirmation(effectiveInvitations.length, {
            count: effectiveInvitations.length,
          })}
        </span> */}
      </div>

      {/* Pending Invitations List */}
      <div className="pending-invitations-list">
        {invitations.map(invitation => (
          <div className="invitation-card" key={invitation.invitationId}>
            <div className="invitation-left">
              <div className="invitation-avatar-box">
                <Icon icon="fa-solid fa-question" />
              </div>
              <div className="invitation-body">
                <span className="invitation-email">{invitation.username}</span>
                <div className="invitation-subtext">
                  <span>
                    {/* { text.defaultSentAt()} •{' '} */}

                    {invitation.state === 'declined'
                      ? text.invitationRejected()
                      : text.invitationPending()}
                  </span>
                </div>
              </div>
            </div>
            <div className="invitation-actions">
              <Button
                handlingClass="cancel-btn"
                icon="fa-solid fa-xmark"
                hideTitle
                onClick={() => onCancelInvitation?.(invitation.invitationId)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

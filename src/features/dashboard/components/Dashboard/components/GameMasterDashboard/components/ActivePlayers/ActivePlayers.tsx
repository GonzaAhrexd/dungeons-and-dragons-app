import { useMemo } from 'react'
import './ActivePlayers.css'
import { Icon } from '@/shared/ui/Icon/Icon'
import { useText } from '@/features/langs/hooks/useText'
import { activePlayersText } from './ActivePlayers.langs'
import { useGameMasterStore } from '@/features/dashboard/components/Dashboard/store/gamemaster.store'
import type { ActivePlayersProps } from '../../../../interfaces'

const DEFAULT_PROFILES = [
  {
    characterName: 'GONZAAHRE',
    characterClass: 'Paladín del Juramento',
    race: 'Humano',
    level: 4,
    hp: { current: 34, max: 38 },
  },
  {
    characterName: 'ELANOR_SOMBRA',
    characterClass: 'Hechicera Dracónica',
    race: 'Elfa',
    level: 3,
    hp: { current: 22, max: 22 },
  },
  {
    characterName: 'THORIN_BARBA',
    characterClass: 'Maestro de Batalla',
    race: 'Enano',
    level: 4,
    hp: { current: 28, max: 45 },
  },
]

export const ActivePlayers = ({
  invitations = [],
  players = [],
  maxPlayers = 6,
  onResendInvitation,
  onCancelInvitation,
}: ActivePlayersProps) => {
  const text = useText(activePlayersText)
  const mockData = useGameMasterStore(state => state.mockData)

  const effectivePlayers = useMemo(() => {
    const list = [...players]
    mockData.players.forEach((mockP, idx) => {
      if (!list[idx]) {
        list[idx] = mockP
      } else {
        list[idx] = {
          ...mockP,
          ...list[idx],
          characterName:
            list[idx].characterName ||
            list[idx].username ||
            mockP.characterName,
          characterClass: list[idx].characterClass || mockP.characterClass,
          race: list[idx].race || mockP.race,
          level: list[idx].level ?? mockP.level,
          hp: list[idx].hp || mockP.hp,
          avatarUrl: list[idx].avatarUrl || mockP.avatarUrl,
        }
      }
    })
    return list.length > 0 ? list : mockData.players
  }, [players, mockData.players])

  const effectiveInvitations = useMemo(() => {
    const list = [...invitations]
    mockData.invitations.forEach((mockInv, idx) => {
      if (!list[idx]) {
        list[idx] = mockInv
      }
    })
    return list.length > 0 ? list : mockData.invitations
  }, [invitations, mockData.invitations])

  const activeCount = effectivePlayers.length
  const freeSlots = Math.max(0, maxPlayers - activeCount)

  const getFillClass = (current: number, max: number) => {
    const pct = max > 0 ? (current / max) * 100 : 100
    if (pct > 75) return 'fill-green'
    if (pct > 35) return 'fill-amber'
    return 'fill-red'
  }

  return (
    <div className="cmp-active-players">
      {/* Header 1: Active Players */}
      <div className="label">
        <div className="label-title">
          <Icon icon="fa-solid fa-users" />
          <h1>{text.activePlayers()}</h1>
        </div>
        <span className="label-count">
          {text.actives(activeCount, { total: activeCount })}
        </span>
      </div>

      {/* Grid of Players */}
      <div className="players-grid">
        {effectivePlayers.map((player, index) => {
          const fallback = DEFAULT_PROFILES[index % DEFAULT_PROFILES.length]
          const name =
            player.characterName || player.username || fallback.characterName
          const level = player.level ?? fallback.level
          const characterClass =
            player.characterClass || fallback.characterClass
          const race = player.race || fallback.race
          const hp = player.hp || fallback.hp
          const avatar = player.avatarUrl || '/avatar.png'
          const hpPct = Math.min(
            100,
            Math.max(0, Math.round((hp.current / hp.max) * 100)),
          )

          return (
            <div
              className="player-card"
              key={player.playerId || player.id || index}
            >
              <div className="player-avatar-box">
                <img
                  src={avatar}
                  alt={name}
                  className="player-avatar-img"
                  onError={e => {
                    ;(e.target as HTMLImageElement).src = '/avatar.png'
                  }}
                />
              </div>
              <div className="player-body">
                <div className="player-header">
                  <div className="player-name-wrapper">
                    <span className="player-name">{name}</span>
                    <span className="player-level-badge">
                      {text.levelShort()} {level}
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
                  {characterClass} • {race}
                </div>
                <div className="player-hp-section">
                  <div className="hp-bar-track">
                    <div
                      className={`hp-bar-fill ${getFillClass(hp.current, hp.max)}`}
                      style={{ width: `${hpPct}%` }}
                    />
                  </div>
                  <span className="hp-text">
                    {hp.current}/{hp.max} HP
                  </span>
                </div>
              </div>
            </div>
          )
        })}

        {/* Free Adventurer Slot */}
        {freeSlots > 0 && (
          <div className="player-card free-slot">
            <div className="player-avatar-box free-avatar-box">
              <Icon icon="fa-solid fa-plus" />
            </div>
            <div className="player-body">
              <span className="free-slot-title">{text.freeSlotTitle()}</span>
              <span className="free-slot-subtext">
                {text.availableSlots(freeSlots, { count: freeSlots })}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Header 2: Pending Invitations */}
      <div className="section-label">
        <div className="label-title">
          <Icon icon="fa-regular fa-clock" />
          <h1>{text.pendingInvitations()}</h1>
        </div>
        <span className="label-badge-muted">
          {text.awaitingConfirmation(effectiveInvitations.length, {
            count: effectiveInvitations.length,
          })}
        </span>
      </div>

      {/* Pending Invitations List */}
      <div className="pending-invitations-list">
        {effectiveInvitations.map((invitation, idx) => (
          <div
            className="invitation-card"
            key={invitation.invitationId || invitation.id || idx}
          >
            <div className="invitation-left">
              <div className="invitation-avatar-box">
                <Icon icon="fa-solid fa-question" />
              </div>
              <div className="invitation-body">
                <span className="invitation-email">{invitation.username}</span>
                <div className="invitation-subtext">
                  <span>
                    {invitation.sentAt || text.defaultSentAt()} •{' '}
                    {text.pendingAcceptance()}
                  </span>
                </div>
              </div>
            </div>
            <div className="invitation-actions">
              <button
                type="button"
                className="resend-btn"
                onClick={() =>
                  onResendInvitation?.(
                    invitation.invitationId || invitation.id || '',
                  )
                }
              >
                <Icon icon="fa-solid fa-rotate-right" />
                <span>{text.resend()}</span>
              </button>
              <button
                type="button"
                className="cancel-btn"
                title={text.cancel()}
                onClick={() =>
                  onCancelInvitation?.(
                    invitation.invitationId || invitation.id || '',
                  )
                }
              >
                <Icon icon="fa-solid fa-xmark" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

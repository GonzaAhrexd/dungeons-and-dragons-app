export interface ActivePlayer {
  id?: string
  playerId?: string
  username: string
  characterName?: string
  characterClass?: string
  race?: string
  level?: number
  hp?: {
    current: number
    max: number
  }
}

export interface PendingInvitation {
  id?: string
  invitationId?: string
  username: string
  state?: string
  sentAt?: string
}

export interface ActivePlayersProps {
  players: ActivePlayer[]
  invitations: PendingInvitation[]
}


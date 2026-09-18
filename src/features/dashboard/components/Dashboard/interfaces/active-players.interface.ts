export interface ActivePlayer {
  id?: string
  playerId?: string
  username: string
  characterName?: string
  characterClass?: string
  race?: string
  level?: number
  avatarUrl?: string
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

import type { ActivePlayer, PendingInvitation } from './active-players.interface'

export interface GameMasterMockData {
  act: string
  playersMax: number
  session: string
  nextSessionDate: string | Date | null
  players: ActivePlayer[]
  invitations: PendingInvitation[]
}

export interface CampaignInfoProps {
  title: string
  description: string
  players: number
  playersMax: number
  session: string
  act: string
  nextSessionDate?: string | Date | null
  isInSession?: boolean
}


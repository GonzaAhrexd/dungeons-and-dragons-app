import type { ActivePlayer, PendingInvitation } from './active-players.interface'
import type { CampaignLogItem } from './logs.interface'

export interface GameMasterMockData {
  act: string
  playersMax: number
  session: string
  nextSessionDate: string | Date | null
  players: ActivePlayer[]
  invitations: PendingInvitation[]
  logs: CampaignLogItem[]
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


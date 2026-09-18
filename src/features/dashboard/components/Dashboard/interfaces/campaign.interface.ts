
import type { CampaignLogItem } from './logs.interface'

export interface GameMasterMockData {
  act: string
  playersMax: number
  session: string
  nextSessionDate: string | Date | null
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

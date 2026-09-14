export interface GameMasterMockData {
  act: string
  playersMax: number
  session: string
  nextSessionDate: string | Date | null
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


export type CampaignLogType =
  | 'saving_throw'
  | 'narrative'
  | 'spell'
  | 'initiative'
  | 'roll'
  | 'lore'
  | 'combat'
  | 'general'

export interface CampaignLogItem {
  id: string
  time: string
  type: CampaignLogType
  tagLabel: string
  actor?: string
  actionText?: string
  spellName?: string
  highlightText?: string
  formula?: string
  description?: string
}

export interface CampaignLogsProps {
  logs?: CampaignLogItem[]
  onAddManualLog?: () => void
  onViewAll?: () => void
}

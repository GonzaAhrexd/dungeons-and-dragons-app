export interface CampaignLogItem {
  id: string
  timestamp: string
  content: string
  type?: 'roll' | 'lore' | 'combat' | 'general'
}

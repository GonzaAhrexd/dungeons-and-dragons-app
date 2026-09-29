export interface CampaignResponse {
  name: string
  description: string
  campaignId: string
  isGameMaster: boolean
  isActive: boolean

  createdAt: Date
}

export type GetMyCampaignsResponse = CampaignResponse[]

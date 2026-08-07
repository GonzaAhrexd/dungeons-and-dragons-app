export interface CampaignResponse {
  name: string
  description: string
  campaignId: string
  isGameMaster: boolean
}

export type GetMyCampaignsResponse = CampaignResponse[]

import { useQuery } from '@tanstack/react-query'
import type { AxiosError } from 'axios'
import { CampaignService } from '../services/campaign.service'
import type { GetCampaignByIdResponse } from '../interfaces'

export const useGetCampaignById = (campaignId: string) => {
  return useQuery<GetCampaignByIdResponse, AxiosError>({
    queryKey: ['campaign', campaignId],
    queryFn: () => CampaignService.getCampaignById(campaignId),
    enabled: !!campaignId,
  })
}

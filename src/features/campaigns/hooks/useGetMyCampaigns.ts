import { useQuery } from '@tanstack/react-query'
import type { AxiosError } from 'axios'
import { CampaignService } from '../services/campaign.service'
import type { GetMyCampaignsResponse } from '../interfaces'

export const useGetMyCampaigns = () => {
  return useQuery<GetMyCampaignsResponse, AxiosError>({
    queryKey: ['myCampaigns'],
    queryFn: () => CampaignService.getMyCampaigns(),
  })
}

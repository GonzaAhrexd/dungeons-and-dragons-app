import { useQuery } from '@tanstack/react-query'
import type { AxiosError } from 'axios'
import { CampaignService } from '../services/campaign.service'
import type { GetInvitationResponse } from '../interfaces'

export const useGetInvitations = () => {
  return useQuery<GetInvitationResponse[], AxiosError>({
    queryKey: ['myInvitations'],
    queryFn: () => CampaignService.getInvitations(),
  })
}

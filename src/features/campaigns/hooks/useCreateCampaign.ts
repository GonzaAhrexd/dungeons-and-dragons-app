import { CampaignService } from '../services/campaign.service'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import type {
  CreateCampaignRequest,
  CreateCampaignResponse,
} from '../interfaces'

export const useCreateCampaign = () => {
  const queryClient = useQueryClient()

  const mutation = useMutation<
    CreateCampaignResponse,
    Error,
    CreateCampaignRequest
  >({
    mutationFn: CampaignService.createCampaign,
    onSuccess: data => {
      console.log('Campaign created successfully:', data)
      queryClient.invalidateQueries({ queryKey: ['myCampaigns'] })
    },
    onError: error => {
      console.error('Failed to create campaign:', error.message)
    },
  })
  return mutation
}

import { CampaignService } from '../services/campaign.service'

import { useMutation } from '@tanstack/react-query'
import type {
  CreateCampaignRequest,
  CreateCampaignResponse,
} from '../interfaces'

export const useCreateCampaign = () => {
  const mutation = useMutation<
    CreateCampaignResponse,
    Error,
    CreateCampaignRequest
  >({
    mutationFn: CampaignService.createCampaign,
    onSuccess: data => {
      console.log('Campaign created successfully:', data)
    },
    onError: error => {
      console.error('Failed to create campaign:', error.message)
    },
  })
  return mutation
}

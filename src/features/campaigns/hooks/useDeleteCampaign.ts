import { CampaignService } from '../services/campaign.service'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import type {
  DeleteCampaignRequest,
  DeleteCampaignResponse,
} from '../interfaces'
import { useCampaignStore } from '../store/campaign.store'

export const useDeleteCampaign = () => {
  const queryClient = useQueryClient()
  const resetCampaignState = useCampaignStore(state => state.reset)
  const mutation = useMutation<
    DeleteCampaignResponse,
    Error,
    DeleteCampaignRequest
  >({
    mutationFn: data => CampaignService.deleteCampaign(data),
    onSuccess: data => {
      queryClient.invalidateQueries({ queryKey: ['myCampaigns'] })
      queryClient.invalidateQueries({ queryKey: ['campaign', data.id] })

      resetCampaignState()
    },
    onError: error => {
      console.error('Failed to delete campaign:', error.message)
    },
  })

  return mutation
}

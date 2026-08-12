import { CampaignService } from '../services/campaign.service'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import type {
  EditCampaignRequest,
  EditCampaignResponse,
  EditCampaignParams,
} from '../interfaces'

export const useEditCampaign = () => {
  const queryClient = useQueryClient()

  const mutation = useMutation<
    EditCampaignResponse,
    Error,
    { params: EditCampaignParams; data: EditCampaignRequest }
  >({
    mutationFn: ({ params, data }) =>
      CampaignService.editCampaign(params, data),
    onSuccess: data => {
      queryClient.invalidateQueries({ queryKey: ['myCampaigns'] })
      queryClient.invalidateQueries({ queryKey: ['campaign', data.id] })

      console.log('Campaign edited successfully:', data)
    },
    onError: error => {
      console.error('Failed to edit campaign:', error.message)
    },
  })
  return mutation
}

import { CampaignService } from '../services/campaign.service'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import type {
  AcceptInvitationParams,
  AcceptInvitationResponse,
} from '../interfaces'

export const useAcceptInvitation = () => {
  const queryClient = useQueryClient()

  const mutation = useMutation<
    AcceptInvitationResponse,
    Error,
    AcceptInvitationParams
  >({
    mutationFn: CampaignService.acceptInvitation,
    onSuccess: data => {
      console.log('Invitation accepted successfully:', data)
      queryClient.invalidateQueries({ queryKey: ['myInvitations'] })
      queryClient.invalidateQueries({ queryKey: ['myCampaigns'] })
    },
    onError: error => {
      console.error('Failed to accept invitation:', error.message)
    },
  })
  return mutation
}

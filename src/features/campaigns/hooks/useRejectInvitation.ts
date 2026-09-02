import { CampaignService } from '../services/campaign.service'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import type {
  RejectInvitationParams,
  RejectInvitationResponse,
} from '../interfaces'

export const useRejectInvitation = () => {
  const queryClient = useQueryClient()

  const mutation = useMutation<
    RejectInvitationResponse,
    Error,
    RejectInvitationParams
  >({
    mutationFn: CampaignService.rejectInvitation,
    onSuccess: data => {
      console.log('Invitation rejected successfully:', data)
      queryClient.invalidateQueries({ queryKey: ['myInvitations'] })
    },
    onError: error => {
      console.error('Failed to reject invitation:', error.message)
    },
  })
  return mutation
}

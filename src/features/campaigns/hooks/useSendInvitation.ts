import { CampaignService } from '../services/campaign.service'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import type {
  SendInvitationRequest,
  SendInvitationResponse,
} from '../interfaces'

export const useSendInvitation = () => {
  const queryClient = useQueryClient()

  const mutation = useMutation<
    SendInvitationResponse,
    Error,
    SendInvitationRequest
  >({
    mutationFn: CampaignService.sendInvitation,
    onSuccess: data => {
      console.log('Invitation sent successfully:', data)
      queryClient.invalidateQueries({ queryKey: ['campaign', data.campaignId] })
    },
    onError: error => {
      console.error('Failed to send invitation:', error.message)
    },
  })
  return mutation
}

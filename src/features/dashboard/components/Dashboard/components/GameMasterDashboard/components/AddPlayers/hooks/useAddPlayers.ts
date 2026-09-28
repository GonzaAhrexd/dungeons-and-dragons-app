import { useSendInvitation } from '@/features/campaigns/hooks/useSendInvitation'
import { useCampaignStore } from '@/features/campaigns/store/campaign.store'
import { parseFormData } from '@/shared/utils/formData.util'
import type { SubmitEventHandler } from 'react'

export const useAddPlayers = () => {
  const { mutateAsync: sendInvitation } = useSendInvitation()
  const campaignId = useCampaignStore(state => state.currentCampaignId)

  const handleAddPlayer: SubmitEventHandler<HTMLFormElement> = async e => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const data = parseFormData(formData, {
      username: 'string',
    })

    const invitationData = {
      campaignId: campaignId!,
      username: data.username,
    }

    await sendInvitation(invitationData)
  }

  return {
    handleAddPlayer,
  }
}

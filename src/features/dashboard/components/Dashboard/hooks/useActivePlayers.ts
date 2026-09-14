import { useCampaignStore } from '@/features/campaigns/store/campaign.store'
import { useGetCampaignById } from '@/features/campaigns/hooks/useGetCampaignById'

export const useActivePlayers = () => {
  const campaignId = useCampaignStore(state => state.currentCampaignId)
  const { data: campaign, isLoading, error } = useGetCampaignById(campaignId)

  return {
    campaign,
    players: campaign?.players || [],
    invitations: campaign?.invitations || [],
    isLoading,
    error,
  }
}

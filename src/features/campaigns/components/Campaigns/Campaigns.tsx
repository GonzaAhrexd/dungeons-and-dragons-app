import './Campaigns.css'
import { campaignsText } from './Campaigns.langs'
import { useText } from '@/features/langs/hooks/useText'
import { CampaignAdd, CampaignCard } from './components'
import { useGetMyCampaigns } from '../../hooks/useGetMyCampaigns'
export const Campaigns = () => {
  const text = useText(campaignsText)

  const { data: myCampaigns, isLoading, isError } = useGetMyCampaigns()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error loading campaigns.</div>
  }

  return (
    <div className="cmp-campaigns">
      <h1>{text.activeCampaigns()}</h1>
      <div className="campaigns-list">
        <CampaignAdd />
        {myCampaigns?.map(campaign => (
          <CampaignCard
            key={campaign.campaignId}
            title={campaign.name}
            description={campaign.description}
            character={campaign.isGameMaster ? 'Game Master' : 'Player'}
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3xS4junhykLR37kcvFPxEcT__FSdtsoYwQ6rv5KS00F-xesC8u4093g&s=10"
            avatarUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3xS4junhykLR37kcvFPxEcT__FSdtsoYwQ6rv5KS00F-xesC8u4093g&s=10"
          />
        ))}
      </div>
    </div>
  )
}

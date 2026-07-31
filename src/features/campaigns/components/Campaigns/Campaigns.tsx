import './Campaigns.css'
import { campaignsText } from './Campaigns.langs'
import { useText } from '@/features/langs/hooks/useText'
import { CampaignAdd, CampaignCard } from './components'
export const Campaigns = () => {
  const text = useText(campaignsText)

  return (
    <div className="cmp-campaigns">
      <h1>{text.activeCampaigns()}</h1>
      <div className="campaigns-list">
        <CampaignAdd 
          onCreateCampaign={() => console.log('Create Campaign')}
          onJoinCampaign={() => console.log('Join Campaign')}
        />
        <CampaignCard
          title="La plaga carmesí"
          description="Una plaga que se propaga rápidamente por el reino."
          character="Bertok"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3xS4junhykLR37kcvFPxEcT__FSdtsoYwQ6rv5KS00F-xesC8u4093g&s=10"
          avatarUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3xS4junhykLR37kcvFPxEcT__FSdtsoYwQ6rv5KS00F-xesC8u4093g&s=10"
        />
      </div>
    </div>
  )
}

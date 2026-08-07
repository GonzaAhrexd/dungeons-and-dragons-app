import { useCampaignStore } from '@/features/campaigns/store/campaign.store'
import './CampaignCard.css'
import type { CampaignResponse } from '@/features/campaigns/interfaces/getMyCampaigns/getMyCampaignsResponse'
import { useLocation } from 'wouter'
interface CampaignCardProps {
  campaign: CampaignResponse
  imageUrl: string
  avatarUrl: string
}

export const CampaignCard = ({
  campaign,
  imageUrl,
  avatarUrl,
}: CampaignCardProps) => {
  const { campaignId, name, description, isGameMaster } = campaign

  const setCampaignId = useCampaignStore(state => state.setCurrentCampaignId)
  const [, navigate] = useLocation()

  const handleCardClick = () => {
    setCampaignId(campaignId)
    navigate('/dashboard')
  }

  return (
    <div className="cmp-campaign-card" onClick={handleCardClick}>
      <div
        className="cmp-campaign-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>

      <div className="campaign-info">
        <h1>{name}</h1>
        <p>{description}</p>
      </div>

      <div className="dividerr"></div>

      <div className="gm-info">
        {/* TODO: Cambiar por el nombre del jugador cuando esté disponible en el Backend */}
        <img
          className="gm-avatar"
          src={avatarUrl}
          alt={isGameMaster ? 'Game Master' : 'Player'}
        />
        <span className="gm-name">
          {isGameMaster ? 'Game Master' : 'Player'}
        </span>
      </div>
    </div>
  )
}

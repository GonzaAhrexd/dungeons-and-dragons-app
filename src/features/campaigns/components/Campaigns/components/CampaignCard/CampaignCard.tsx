import './CampaignCard.css'
import { useCampaignStore } from '@/features/campaigns/store/campaign.store'
import type { CampaignResponse } from '@/features/campaigns/interfaces'
import { useLocation } from 'wouter'
import { Badge } from '@/shared/ui/Badge/Badge'
import { useText } from '@/features/langs/hooks/useText'
import { campaignCardText } from './CampaignCard.langs'

interface CampaignCardProps {
  campaign: CampaignResponse
  imageUrl: string
}

export const CampaignCard = ({ campaign, imageUrl }: CampaignCardProps) => {
  const { campaignId, name, description, isActive, isGameMaster } = campaign

  const text = useText(campaignCardText)

  const setCampaignId = useCampaignStore(state => state.setCurrentCampaignId)
  const setIsGameMaster = useCampaignStore(state => state.setIsGameMaster)
  const [, navigate] = useLocation()

  const handleCardClick = () => {
    setCampaignId(campaignId)
    setIsGameMaster(isGameMaster)
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

      <div className="campaign-divider"></div>

      <div className="user-info">
        {/* TODO: Cambiar por el nombre del jugador cuando esté disponible en el Backend */}
        <img
          className="user-avatar"
          src={'/avatar.png'}
          alt={isGameMaster ? 'Game Master' : 'Player'}
          onError={e => {
            ;(e.target as HTMLImageElement).src = '/avatar.png'
          }}
        />

        <span className="user-name">
          {isGameMaster ? 'Game Master' : 'Player'}
        </span>
          {!isActive && <Badge text={text.inactive()} color="gray" />}
      </div>
    </div>
  )
}

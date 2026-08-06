import './CampaignCard.css'

interface CampaignCardProps {
  title: string
  description: string
  character: string
  imageUrl: string
  avatarUrl: string
}

export const CampaignCard = ({
  title,
  description,
  character,
  imageUrl,
  avatarUrl,
}: CampaignCardProps) => {
  return (
    <div className="cmp-campaign-card">
      <div
        className="cmp-campaign-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>

      <div className="campaign-info">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <div className='dividerr'></div>

      <div className="gm-info">
        <img className="gm-avatar" src={avatarUrl} alt={character} />
        <span className="gm-name">{character}</span>
      </div>
    </div>
  )
}

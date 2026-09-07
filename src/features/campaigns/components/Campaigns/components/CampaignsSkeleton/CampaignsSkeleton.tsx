import './CampaignsSkeleton.css'
import { campaignsText } from '../../Campaigns.langs'
import { useText } from '@/features/langs/hooks/useText'

export const CampaignsSkeleton = () => {
  const text = useText(campaignsText)

  return (
    <div className="cmp-campaigns cmp-campaigns-skeleton">
      <div className="campaigns-header">
        <div className="campaigns-header-content">
          <h1 className="campaigns-title">{text.activeCampaigns()}</h1>
          <p className="campaigns-subtitle">{text.subtitle()}</p>
        </div>
      </div>

      <div className="filters">
        <div className="box filters-box" />
      </div>

      <div className="campaigns-list">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="card">
            <div className="image" />
            <div className="info">
              <div className="box card-title" />
              <div className="box card-desc" />
            </div>
            <div className="divider" />
            <div className="user-info">
              <div className="circle avatar" />
              <div className="box user-name" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

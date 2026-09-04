import { useText } from '@/features/langs/hooks/useText'
import { campaignText } from './CampaignStory.langs'
import { Button } from '@/shared/ui/Button/Button'
import { Icon } from '@/shared/ui/Icon/Icon'
import { useCampaignStory } from './hooks/useCampaignStory'
import './CampaignStory.css'

interface CampaignProps {
  title: string
  description: string
}

export const Campaign = ({ title, description }: CampaignProps) => {
  const text = useText(campaignText)
  const { expanded, toggleExpanded, contentRef, containerRef, height } =
    useCampaignStory()

  return (
    <div
      ref={containerRef}
      className={`story-card-wrapper ${expanded ? 'expanded' : ''}`}
    >
      <div className={`card paper cmp-campaign-story ${expanded ? 'expanded' : ''}`}>
        <h3>{title}</h3>
        <div
          ref={contentRef}
          className="story-text dropcap"
          style={{ maxHeight: height }}
        >
          <p>{description}</p>
        </div>
        <div className="card-footer">
          <Button
            title={text.realmMap()}
            icon="fa-solid fa-map"
            theme="primary"
            handlingClass="map-btn-gold"
          />
          <a className="log-link" onClick={toggleExpanded}>
            {expanded ? text.showLess() : text.readMore()}{' '}
            <Icon
              icon={expanded ? 'fa-solid fa-arrow-up' : 'fa-solid fa-arrow-right'}
            />
          </a>
        </div>
      </div>
    </div>
  )
}


import { useText } from '@/features/langs/hooks/useText'
import { timelineText } from './Timeline.langs'
import { Icon } from '@/shared/ui/Icon/Icon'
import './Timeline.css'

interface TimelineItem {
  season: string
  event: string
}

interface TimelineProps {
  timelineItems: TimelineItem[]
}

export const Timeline = ({ timelineItems }: TimelineProps) => {
  const text = useText(timelineText)

  return (
    <div className="dp-chronology">
      <div className="dp-chronology-header">
        <Icon icon="fa-solid fa-clock-rotate-left" />
        <span className="dp-chronology-title">{text.campaignTimeline()}</span>
      </div>
      <div className="dp-timeline">
        {timelineItems.map((item, i) => (
          <div key={i} className="dp-timeline-item">
            <span className="dp-tl-season">{item.season}</span>
            <span className="dp-tl-event">{item.event}</span>
          </div>
        ))}
      </div>
      <a className="dp-expand-link">{text.expandHistory()}</a>
    </div>
  )
}

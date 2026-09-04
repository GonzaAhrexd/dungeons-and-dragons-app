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
    <div className="cmp-timeline">
      <div className="chronology-header">
        <Icon icon="fa-solid fa-clock-rotate-left" />
        <span className="chronology-title">{text.campaignTimeline()}</span>
      </div>
      <div className="timeline-list">
        {timelineItems.map((item, i) => (
          <div key={i} className="timeline-item">
            <span className="tl-season">{item.season}</span>
            <span className="tl-event">{item.event}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

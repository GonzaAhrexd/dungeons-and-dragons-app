import { useEffect, useRef, useState } from 'react'
import { useText } from '@/features/langs/hooks/useText'
import { campaignText } from './Campaign.langs'
import { Button } from '@/shared/ui/Button/Button'
import { Icon } from '@/shared/ui/Icon/Icon'
import './Campaign.css'

interface CampaignProps {
  title: string
  quote?: string
  description: string
}

export const Campaign = ({ title, quote, description }: CampaignProps) => {
  const text = useText(campaignText)
  const [expanded, setExpanded] = useState(false)
  const [scrollHeight, setScrollHeight] = useState(0)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = contentRef.current
    if (!el) return
    const observer = new ResizeObserver(() => {
      setScrollHeight(el.scrollHeight)
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const collapsedHeight = quote ? '3.2em' : '4.8em'
  const height = expanded ? `${scrollHeight}px` : collapsedHeight

  return (
    <div className="dp-card dp-paper campaign-card">
      <h3>{title}</h3>
      {quote && <p className="dp-quote">{quote}</p>}
      <div
        ref={contentRef}
        className="dp-history-text"
        style={{ maxHeight: height }}
      >
        <p>{description}</p>
      </div>
      <div className="dp-chronicle-footer">
        <Button
          title={text.realmMap()}
          icon="fa-solid fa-map"
          theme="primary"
          handlingClass="dp-map-btn-gold"
        />
        <a className="dp-log-link" onClick={() => setExpanded(e => !e)}>
          {expanded ? text.showLess() : text.readMore()}{' '}
          <Icon icon={expanded ? 'fa-solid fa-arrow-up' : 'fa-solid fa-arrow-right'} />
        </a>
      </div>
    </div>
  )
}

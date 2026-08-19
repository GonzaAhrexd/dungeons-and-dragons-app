import { useEffect, useRef, useState } from 'react'
import { Link } from 'wouter'
import { useText } from '@/features/langs/hooks/useText'
import { heroHistoryText } from './HeroHistory.langs'
import { Icon } from '@/shared/ui/Icon/Icon'
import './HeroHistory.css'

interface HeroHistoryProps {
  historyText: string
}

export const HeroHistory = ({ historyText }: HeroHistoryProps) => {
  const text = useText(heroHistoryText)
  const [expanded, setExpanded] = useState(false)
  const contentRef = useRef<HTMLParagraphElement>(null)
  const [scrollHeight, setScrollHeight] = useState(0)

  useEffect(() => {
    const el = contentRef.current
    if (!el) return
    const observer = new ResizeObserver(() => {
      setScrollHeight(el.scrollHeight)
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const height = expanded ? `${scrollHeight}px` : '4.8em'

  return (
    <div className="dp-card dp-paper hero-history-card">
      <h3>{text.heroHistory()}</h3>
      <p
        ref={contentRef}
        className="dp-history-text dp-dropcap"
        style={{ maxHeight: height }}
      >
        {historyText}
      </p>
      <div className="dp-card-footer">
        <Link to="/characters" className="dp-edit-history-link">
          <Icon icon="fa-solid fa-pen-to-square" /> {text.editHistory()}
        </Link>
        <a className="dp-log-link" onClick={() => setExpanded(e => !e)}>
          {expanded ? text.showLess() : text.readMore()}{' '}
          <Icon icon={expanded ? 'fa-solid fa-arrow-up' : 'fa-solid fa-arrow-right'} />
        </a>
      </div>
    </div>
  )
}

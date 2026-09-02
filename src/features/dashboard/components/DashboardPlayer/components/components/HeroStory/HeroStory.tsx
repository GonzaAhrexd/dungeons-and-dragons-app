import { useEffect, useRef, useState } from 'react'
import { Link } from 'wouter'
import { useText } from '@/features/langs/hooks/useText'
import { heroStoryText } from './HeroStory.langs'
import { Icon } from '@/shared/ui/Icon/Icon'
import './HeroStory.css'

interface HeroStoryProps {
  historyText: string
}

export const HeroStory = ({ historyText }: HeroStoryProps) => {
  const text = useText(heroStoryText)
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

  const height = expanded ? `${scrollHeight}px` : '6.85rem'

  return (
    <div className="card paper cmp-hero-story">
      <h3>{text.heroStory()}</h3>
      <p
        ref={contentRef}
        className="story-text dropcap"
        style={{ maxHeight: height }}
      >
        {historyText}
      </p>
      <div className="card-footer">
        <Link to="/characters" className="edit-story-link">
          <Icon icon="fa-solid fa-pen-to-square" /> {text.editStory()}
        </Link>
        <a className="log-link" onClick={() => setExpanded(e => !e)}>
          {expanded ? text.showLess() : text.readMore()}{' '}
          <Icon
            icon={expanded ? 'fa-solid fa-arrow-up' : 'fa-solid fa-arrow-right'}
          />
        </a>
      </div>
    </div>
  )
}

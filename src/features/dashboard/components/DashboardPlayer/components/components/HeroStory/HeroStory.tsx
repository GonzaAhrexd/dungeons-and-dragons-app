import { Link } from 'wouter'
import { useText } from '@/features/langs/hooks/useText'
import { heroStoryText } from './HeroStory.langs'
import { Icon } from '@/shared/ui/Icon/Icon'
import { useHeroStory } from './hooks/useHeroStory'
import './HeroStory.css'

interface HeroStoryProps {
  historyText: string
}

export const HeroStory = ({ historyText }: HeroStoryProps) => {
  const text = useText(heroStoryText)
  const { expanded, toggleExpanded, contentRef, containerRef, height } =
    useHeroStory()

  return (
    <div
      ref={containerRef}
      className={`story-card-wrapper ${expanded ? 'expanded' : ''}`}
    >
      <div className={`card paper cmp-hero-story ${expanded ? 'expanded' : ''}`}>
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


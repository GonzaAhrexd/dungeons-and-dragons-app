import { useText } from '@/features/langs/hooks/useText'
import { Button } from '@/shared/ui/Button/Button'
import { Icon } from '@/shared/ui/Icon/Icon'
import { statsText } from './Stats.langs'
import { useStats } from '@/features/dashboard/components/DashboardPlayer/hooks'
import type { Attribute } from '../../../interfaces'
import './Stats.css'

interface StatsProps {
  stats: Attribute[]
  onSave?: (stats: Attribute[]) => void
}

export const Stats = ({ stats, onSave }: StatsProps) => {
  const text = useText(statsText)
  const {
    editing,
    displayStats,
    hoveredIndex,
    setHoveredIndex,
    handleStartEdit,
    handleCancel,
    handleSave,
    adjust,
  } = useStats({ stats, onSave })

  return (
    <div
      className={`cmp-stats${editing ? ' editing' : ''}`}
      onClick={!editing ? handleStartEdit : undefined}
    >
      <div className="header">
        <span>
          <Icon icon="fa-solid fa-shield-halved" /> {text.stats()}
        </span>
        <span
          className="edit-hint"
          onClick={editing ? handleCancel : undefined}
        >
          <Icon icon={editing ? 'fa-solid fa-arrow-left' : 'fa-solid fa-pen'} />{' '}
          <span>{editing ? text.back() : text.edit()}</span>
        </span>
      </div>

      <div className="grid">
        {displayStats.map((s, index) => {
          const isHovered = hoveredIndex === index
          return (
            <div
              key={s.id}
              className={`stat${isHovered && editing ? ' hovered' : ''}`}
              onMouseEnter={() => editing && setHoveredIndex(index)}
              onMouseLeave={() => editing && setHoveredIndex(null)}
            >
              {editing && (
                <button
                  className="stat-btn stat-btn--up"
                  onClick={e => adjust(index, 1, e)}
                  aria-label={`Increase ${s.name}`}
                >
                  <Icon icon="fa-solid fa-chevron-up" />
                </button>
              )}
              <span className="stat-label">{s.abbreviation}</span>
              <span className="stat-value">{s.value}</span>
              {editing && (
                <button
                  className="stat-btn stat-btn--down"
                  onClick={e => adjust(index, -1, e)}
                  aria-label={`Decrease ${s.name}`}
                >
                  <Icon icon="fa-solid fa-chevron-down" />
                </button>
              )}
            </div>
          )
        })}
      </div>

      <div className={`footer-wrapper${editing ? ' open' : ''}`}>
        <div className="footer">
          <Button
            title={text.cancel()}
            theme="secondary"
            handlingClass="footer-btn"
            onClick={handleCancel}
          />
          <Button
            title={text.save()}
            theme="primary"
            handlingClass="footer-btn"
            onClick={handleSave}
          />
        </div>
      </div>
    </div>
  )
}

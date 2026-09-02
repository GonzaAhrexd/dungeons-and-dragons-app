import { useState } from 'react'
import { useText } from '@/features/langs/hooks/useText'
import { Button } from '@/shared/ui/Button/Button'
import { Icon } from '@/shared/ui/Icon/Icon'
import { statsText } from './Stats.langs'
import './Stats.css'

interface StatItem {
  label: string
  value: number
}

interface StatsProps {
  stats: StatItem[]
  onSave?: (stats: StatItem[]) => void
}

export const Stats = ({ stats, onSave }: StatsProps) => {
  const text = useText(statsText)
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState<StatItem[]>(stats)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const displayStats = editing ? draft : stats

  const statLabels: Record<string, string> = {
    str: text.str(),
    dex: text.dex(),
    con: text.con(),
    int: text.int(),
    wis: text.wis(),
    cha: text.cha(),
  }

  const handleStartEdit = () => {
    setDraft(stats.map(s => ({ ...s })))
    setEditing(true)
  }

  const handleCancel = (e: React.MouseEvent) => {
    e.stopPropagation()
    setDraft(stats.map(s => ({ ...s })))
    setEditing(false)
    setHoveredIndex(null)
  }

  const handleSave = (e: React.MouseEvent) => {
    e.stopPropagation()
    onSave?.(draft)
    setEditing(false)
    setHoveredIndex(null)
  }

  const adjust = (index: number, delta: number, e: React.MouseEvent) => {
    e.stopPropagation()
    setDraft(prev =>
      prev.map((s, i) =>
        i === index ? { ...s, value: Math.max(1, s.value + delta) } : s,
      ),
    )
  }

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
          const key = s.label.toLowerCase()
          const labelText = statLabels[key] || s.label
          const isHovered = hoveredIndex === index
          return (
            <div
              key={s.label}
              className={`stat${isHovered && editing ? ' hovered' : ''}`}
              onMouseEnter={() => editing && setHoveredIndex(index)}
              onMouseLeave={() => editing && setHoveredIndex(null)}
            >
              {editing && (
                <button
                  className="stat-btn stat-btn--up"
                  onClick={e => adjust(index, 1, e)}
                  aria-label={`Increase ${labelText}`}
                >
                  <Icon icon="fa-solid fa-chevron-up" />
                </button>
              )}
              <span className="stat-label">{labelText}</span>
              <span className="stat-value">{s.value}</span>
              {editing && (
                <button
                  className="stat-btn stat-btn--down"
                  onClick={e => adjust(index, -1, e)}
                  aria-label={`Decrease ${labelText}`}
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

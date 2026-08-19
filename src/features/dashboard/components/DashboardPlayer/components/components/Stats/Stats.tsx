import { useText } from '@/features/langs/hooks/useText'
import { statsText } from './Stats.langs'
import './Stats.css'

interface StatItem {
  label: string
  value: number
}

interface StatsProps {
  stats: StatItem[]
}

export const Stats = ({ stats }: StatsProps) => {
  const text = useText(statsText)

  const statLabels: Record<string, string> = {
    str: text.str(),
    dex: text.dex(),
    con: text.con(),
    int: text.int(),
    wis: text.wis(),
    cha: text.cha(),
  }

  return (
    <div className="dp-stats-grid">
      {stats.map(s => {
        const key = s.label.toLowerCase()
        const labelText = statLabels[key] || s.label
        return (
          <div key={s.label} className="dp-stat">
            <span className="dp-stat-label">{labelText}</span>
            <span className="dp-stat-value">{s.value}</span>
          </div>
        )
      })}
    </div>
  )
}

import { useText } from '@/features/langs/hooks/useText'
import { vitalsText } from './Vitals.langs'
import './Vitals.css'

interface VitalsProps {
  hp: { current: number; max: number }
  shield: { current: number; max: number }
}

export const Vitals = ({ hp, shield }: VitalsProps) => {
  const text = useText(vitalsText)
  const hpPct = hp.max > 0 ? (hp.current / hp.max) * 100 : 0
  const shieldPct = shield.max > 0 ? (shield.current / shield.max) * 100 : 0

  return (
    <div className="dp-vitals">
      <div className="dp-bar-row">
        <span className="dp-bar-label">{text.health()}</span>
        <span className="dp-bar-value">
          {hp.current} / {hp.max}
        </span>
      </div>
      <div className="dp-bar">
        <div className="dp-bar-fill hp" style={{ width: `${hpPct}%` }} />
      </div>
      <div className="dp-bar-row dp-bar-row--mt">
        <span className="dp-bar-label">{text.shield()}</span>
        <span className="dp-bar-value">
          {shield.current} / {shield.max}
        </span>
      </div>
      <div className="dp-bar">
        <div
          className="dp-bar-fill shield"
          style={{ width: `${shieldPct}%` }}
        />
      </div>
    </div>
  )
}

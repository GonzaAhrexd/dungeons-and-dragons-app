import { type VitalBar } from '../../../../interfaces'

interface VitalsDetailsProps {
  bars: VitalBar[]
}

export const VitalsDetails = ({ bars }: VitalsDetailsProps) => {
  return (
    <div className="dp-vitals-bars-list">
      {bars.map(bar => {
        const pct = bar.max > 0 ? (bar.current / bar.max) * 100 : 0
        return (
          <div key={bar.id} className="dp-vital-bar-item">
            <div className="dp-bar-row">
              <span className="dp-bar-label">{bar.label}</span>
              <span className="dp-bar-value">
                {bar.current} / {bar.max}
              </span>
            </div>
            <div className="dp-bar">
              <div
                className={`dp-bar-fill ${bar.color}`}
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}

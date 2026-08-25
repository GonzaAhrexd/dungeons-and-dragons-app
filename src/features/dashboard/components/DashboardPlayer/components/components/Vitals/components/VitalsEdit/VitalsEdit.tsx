import './VitalsEdit.css'
import { useState } from 'react'
import { Button } from '@/shared/ui/Button/Button'
import { Icon } from '@/shared/ui/Icon/Icon'
import { Input } from '@/shared/ui/Input/Input'
import { type VitalBar } from '../../../../../interfaces'
import { vitalsText } from '../../Vitals.langs'
import { useText } from '@/features/langs/hooks/useText'

const COLOR_OPTIONS: {
  value: VitalBar['color']
  hex: string
}[] = [
  { value: 'red', hex: '#c33c45' },
  { value: 'gold', hex: '#c99a3e' },
  { value: 'green', hex: '#3e6350' },
  { value: 'blue', hex: '#3b82f6' },
  { value: 'purple', hex: '#8b5cf6' },
  { value: 'orange', hex: '#ea580c' },
]

interface VitalsEditProps {
  initialBars: VitalBar[]
  onSave: (updatedBars: VitalBar[]) => void
  onCancel: () => void
}

export const VitalsEdit = ({
  initialBars,
  onSave,
  onCancel,
}: VitalsEditProps) => {
  const text = useText(vitalsText)

  const [prevInitialBars, setPrevInitialBars] = useState(initialBars)
  const [tempBars, setTempBars] = useState<VitalBar[]>(() =>
    initialBars.map(bar => ({ ...bar })),
  )

  if (initialBars !== prevInitialBars) {
    setPrevInitialBars(initialBars)
    setTempBars(initialBars.map(bar => ({ ...bar })))
  }

  const handleAddBar = (e: React.MouseEvent) => {
    e.stopPropagation()
    const newBar: VitalBar = {
      id: Date.now().toString(),
      label: '',
      current: 10,
      max: 10,
      color: 'red',
    }
    setTempBars([...tempBars, newBar])
  }

  const handleDeleteBar = (id: string, e: React.MouseEvent) => {
    e.stopPropagation()
    setTempBars(tempBars.filter(bar => bar.id !== id))
  }

  const handleBarChange = <K extends keyof VitalBar>(
    id: string,
    field: K,
    value: VitalBar[K],
  ) => {
    setTempBars(
      tempBars.map(bar => (bar.id === id ? { ...bar, [field]: value } : bar)),
    )
  }

  const handleSaveClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    onSave(tempBars)
  }

  const handleCancelClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    onCancel()
  }

  return (
    <div className="cmp-vitals-edit" onClick={e => e.stopPropagation()}>
      <div className="dp-vitals-edit-list">
        {tempBars.map(bar => (
          <div key={bar.id} className="edit-row">
            <Input
              name="label"
              theme="gold"
              htmlAttrs={{
                value: bar.label,
                onChange: e => handleBarChange(bar.id, 'label', e.target.value),
                placeholder: text.placeholder(),
              }}
            />
            <div className="dp-vitals-input-numbers">
              <input
                type="number"
                min="0"
                className="dp-vitals-input-val"
                value={bar.current}
                onChange={e =>
                  handleBarChange(
                    bar.id,
                    'current',
                    Math.max(0, parseInt(e.target.value) || 0),
                  )
                }
              />
              <span>/</span>
              <input
                type="number"
                min="1"
                className="dp-vitals-input-val"
                value={bar.max}
                onChange={e =>
                  handleBarChange(
                    bar.id,
                    'max',
                    Math.max(1, parseInt(e.target.value) || 1),
                  )
                }
              />
            </div>
            <div className="dp-vitals-color-picker">
              {COLOR_OPTIONS.map(opt => (
                <button
                  key={opt.value}
                  type="button"
                  className={`dp-vitals-color-dot ${bar.color === opt.value ? 'active' : ''}`}
                  style={{ backgroundColor: opt.hex }}
                  onClick={() => handleBarChange(bar.id, 'color', opt.value)}
                />
              ))}
            </div>
            <button
              type="button"
              className="dp-vitals-delete-btn"
              onClick={e => handleDeleteBar(bar.id, e)}
              title={text.delete()}
              disabled={tempBars.length <= 1}
            >
              <Icon icon="fa-solid fa-trash" />
            </button>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="dp-vitals-add-divider"
        onClick={handleAddBar}
        title={text.newBar()}
      >
        <span className="dp-vitals-add-divider-line" />
        <Icon icon="fa-solid fa-plus" />
        {text.newBar()}
        <span className="dp-vitals-add-divider-line" />
      </button>

      <div className="dp-vitals-footer-buttons">
        <Button
          theme="secondary"
          title={text.cancel()}
          handlingClass="dp-vitals-action-btn"
          onClick={handleCancelClick}
        />
        <Button
          theme="primary"
          title={text.save()}
          handlingClass="dp-vitals-action-btn"
          onClick={handleSaveClick}
        />
      </div>
    </div>
  )
}

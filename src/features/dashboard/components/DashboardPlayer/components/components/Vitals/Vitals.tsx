import './Vitals.css'
import { useText } from '@/features/langs/hooks/useText'
import { vitalsText } from './Vitals.langs'
import { Icon } from '@/shared/ui/Icon/Icon'
import { type VitalBar } from '../../../interfaces'
import { VitalsEdit, VitalsDetails } from './components'
import { useVitals } from './hooks/useVitals'

interface VitalsProps {
  bars: VitalBar[]
  onSave: (updatedBars: VitalBar[]) => void
}

export const Vitals = ({ bars, onSave }: VitalsProps) => {
  const text = useText(vitalsText)
  const {
    isEditing,
    viewportHeight,
    detailsPaneRef,
    editPaneRef,
    handleStartEdit,
    handleSave,
    handleCancel,
  } = useVitals({ bars, onSave })

  return (
    <div className={`cmp-vitals ${isEditing ? 'editing' : ''}`}>
      <div
        className="header"
        onClick={!isEditing ? handleStartEdit : undefined}
      >
        <span>
          <Icon icon="fa-solid fa-heart" /> {text.vitals()}
        </span>
        <span
          className="edit-hint"
          onClick={isEditing ? handleCancel : undefined}
        >
          <Icon
            icon={isEditing ? 'fa-solid fa-arrow-left' : 'fa-solid fa-pen'}
          />{' '}
          <span>{isEditing ? text.back() : text.edit()}</span>
        </span>
      </div>
      <div
        className="slider-viewport"
        style={{
          height:
            viewportHeight !== undefined ? `${viewportHeight}px` : undefined,
        }}
      >
        <div
          className={`slider-track ${isEditing ? 'slide-edit' : 'slide-details'}`}
        >
          <div
            ref={detailsPaneRef}
            className="slide-pane pane-details"
            onClick={!isEditing ? handleStartEdit : undefined}
          >
            <VitalsDetails bars={bars} />
          </div>
          <div ref={editPaneRef} className="slide-pane pane-edit">
            <VitalsEdit
              initialBars={bars}
              onSave={handleSave}
              onCancel={handleCancel}
            />
          </div>
        </div>
      </div>
    </div>
  )
}


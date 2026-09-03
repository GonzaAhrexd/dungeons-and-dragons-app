import { useState } from 'react'
import { useText } from '@/features/langs/hooks/useText'
import { inventoryText } from '../../Inventory.langs'
import { Icon } from '@/shared/ui/Icon/Icon'
import { IconPicker } from '@/shared/ui/IconPicker/IconPicker'
import './ResourceEdit.css'

export interface ResourceEditProps {
  initialIcon: string
  initialLabel: string
  initialValue: number
  iconPackage: string[]
  onSave: (resource: { icon: string; label: string; value: number }) => void
  onDelete: () => void
}

export const ResourceEdit = ({
  initialIcon,
  initialLabel,
  initialValue,
  iconPackage,
  onSave,
  onDelete,
}: ResourceEditProps) => {
  const text = useText(inventoryText)
  const [icon, setIcon] = useState(initialIcon)
  const [label, setLabel] = useState(initialLabel)
  const [value, setValue] = useState(initialValue)

  const handleSave = () => {
    const trimmed = label.trim()
    if (!trimmed) {
      onDelete()
      return
    }
    onSave({ icon, label: trimmed, value })
  }

  return (
    <div className="cmp-resource-edit">
      <IconPicker
        selectedIcon={icon}
        icons={iconPackage}
        onSelectIcon={setIcon}
      />
      <input
        id="resource-input-label"
        name="resource-label"
        type="text"
        className="resource-input-label"
        value={label}
        onChange={e => setLabel(e.target.value)}
        placeholder={text.resourceNamePlaceholder()}
        autoFocus
      />
      <input
        id="resource-input-value"
        name="resource-value"
        type="number"
        className="resource-input-value"
        value={value}
        onChange={e => setValue(parseInt(e.target.value) || 0)}
        min="0"
      />
      <div className="resource-edit-actions">
        <button
          type="button"
          className="resource-action-btn delete"
          title={text.delete()}
          onClick={onDelete}
        >
          <Icon icon="fa-solid fa-trash" />
        </button>
        <button
          type="button"
          className="resource-action-btn save"
          title={text.accept()}
          disabled={!label.trim()}
          onClick={handleSave}
        >
          <Icon icon="fa-solid fa-check" />
        </button>
      </div>
    </div>
  )
}

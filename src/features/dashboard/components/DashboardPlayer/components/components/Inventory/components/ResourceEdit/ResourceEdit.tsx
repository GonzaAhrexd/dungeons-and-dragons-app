import { useState } from 'react'
import { useText } from '@/features/langs/hooks/useText'
import { inventoryText } from '../../Inventory.langs'
import { Icon } from '@/shared/ui/Icon/Icon'
import { IconPicker } from '@/shared/ui/IconPicker/IconPicker'
import { Input } from '@/shared/ui/Input/Input'
import type { ResourceEditProps } from '../../interfaces'
import './ResourceEdit.css'

export const ResourceEdit = ({
  initialIcon,
  initialLabel,
  initialValue,
  iconPackage,
  onSave,
  onDelete,
  onCancel,
}: ResourceEditProps) => {
  const text = useText(inventoryText)
  const [icon, setIcon] = useState(initialIcon)
  const [label, setLabel] = useState(initialLabel)
  const [value, setValue] = useState(initialValue)
  const [confirmingDelete, setConfirmingDelete] = useState(false)

  const handleSave = () => {
    const trimmed = label.trim()
    if (!trimmed) {
      onDelete()
      return
    }
    onSave({ icon, label: trimmed, value })
  }

  const isNew = !initialLabel?.trim()

  return (
    <div className="cmp-resource-edit">
      <IconPicker
        selectedIcon={icon}
        icons={iconPackage}
        onSelectIcon={setIcon}
      />
      <Input
        name="resource-label"
        theme="gold"
        placeholder={text.resourceNamePlaceholder()}
        handlingClass="resource-input-label"
        htmlAttrs={{
          id: 'resource-input-label',
          value: label,
          onChange: e => setLabel(e.target.value),
          autoFocus: true,
        }}
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
        {!isNew && (
          <button
            type="button"
            className={`resource-action-btn delete ${confirmingDelete ? 'confirming' : ''}`}
            title={confirmingDelete ? text.confirmDelete() : text.delete()}
            onClick={() => {
              if (confirmingDelete) {
                onDelete()
              } else {
                setConfirmingDelete(true)
              }
            }}
          >
            <Icon icon={confirmingDelete ? 'fa-solid fa-triangle-exclamation' : 'fa-solid fa-trash'} />
          </button>
        )}
        <button
          type="button"
          className="resource-action-btn cancel"
          title={text.cancel()}
          onClick={onCancel || onDelete}
        >
          <Icon icon="fa-solid fa-xmark" />
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

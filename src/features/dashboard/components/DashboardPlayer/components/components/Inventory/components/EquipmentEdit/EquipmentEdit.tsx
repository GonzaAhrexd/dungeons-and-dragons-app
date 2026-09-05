import { useText } from '@/features/langs/hooks/useText'
import { inventoryText } from '../../Inventory.langs'
import { Icon } from '@/shared/ui/Icon/Icon'
import { IconPicker } from '@/shared/ui/IconPicker/IconPicker'
import { Input } from '@/shared/ui/Input/Input'
import { Select } from '@/shared/ui/Select/Select'
import { ATTRIBUTES } from '@/features/dashboard/components/DashboardPlayer/store/player.store'
import { useEquipmentEdit } from '@/features/dashboard/components/DashboardPlayer/hooks'
import type { EquipmentEditProps } from '@/features/dashboard/components/DashboardPlayer/interfaces'
import './EquipmentEdit.css'

const ATTRIBUTE_OPTIONS = ATTRIBUTES.map(attr => ({
  value: attr.id,
  label: attr.name,
}))

export const EquipmentEdit = ({
  initialItem,
  iconPackage,
  onSave,
  onDelete,
  onCancel,
}: EquipmentEditProps) => {
  const text = useText(inventoryText)

  const {
    icon,
    setIcon,
    title,
    setTitle,
    description,
    setDescription,
    modifiers,
    confirmingDelete,
    setConfirmingDelete,
    handleAddModifier,
    handleRemoveModifier,
    handleModifierChange,
    handleSave,
    isNew,
  } = useEquipmentEdit({ initialItem, onSave, onDelete })

  return (
    <div className="cmp-equipment-edit" onClick={e => e.stopPropagation()}>
      <div className="equipment-edit-left">
        <IconPicker
          selectedIcon={icon}
          icons={iconPackage}
          onSelectIcon={setIcon}
          className="equipment-icon-picker"
        />
        <div className="equipment-inputs-stacked">
          <Input
            name="equipment-title"
            theme="gold"
            placeholder={text.equipmentTitlePlaceholder()}
            handlingClass="equipment-input-title"
            htmlAttrs={{
              id: 'equipment-edit-title',
              value: title,
              onChange: e => setTitle(e.target.value),
              autoFocus: true,
            }}
          />
          <Input
            name="equipment-description"
            theme="gold"
            placeholder={text.equipmentDescPlaceholder()}
            handlingClass="equipment-input-desc"
            htmlAttrs={{
              id: 'equipment-edit-desc',
              value: description,
              onChange: e => setDescription(e.target.value),
            }}
          />
        </div>
      </div>

      <div className="equipment-edit-right">
        <div className="modifier-header-wrapper">
          <span className="modifier-header-label">{text.modifier()}</span>
          <button
            type="button"
            className="add-modifier-btn"
            title={text.addModifier()}
            onClick={handleAddModifier}
          >
            <Icon icon="fa-solid fa-plus" />
          </button>
        </div>

        <div className="modifiers-list">
          {modifiers.map((mod, index) => {
            const currentAttrValue =
              ATTRIBUTE_OPTIONS.find(
                (o: { value: string; label: string }) =>
                  o.value.toLowerCase() === mod.attribute.toLowerCase() ||
                  o.label.toLowerCase() === mod.attribute.toLowerCase(),
              )?.value || mod.attribute

            return (
              <div key={index} className="modifier-row">
                <input
                  id={`modifier-value-${index}`}
                  name={`modifier-value-${index}`}
                  type="number"
                  className="modifier-input-value"
                  value={mod.value}
                  onChange={e =>
                    handleModifierChange(index, 'value', parseInt(e.target.value) || 0)
                  }
                />
                <Select
                  value={currentAttrValue}
                  options={ATTRIBUTE_OPTIONS}
                  onChange={val =>
                    handleModifierChange(index, 'attribute', val)
                  }
                  className="modifier-select-attr"
                />
                {modifiers.length > 1 && (
                  <button
                    type="button"
                    className="remove-modifier-btn"
                    onClick={() => handleRemoveModifier(index)}
                    title={text.removeModifier()}
                  >
                    <Icon icon="fa-solid fa-xmark" />
                  </button>
                )}
              </div>
            )
          })}
        </div>
      </div>

      <div className="equipment-edit-actions">
        {!isNew && (
          <button
            type="button"
            className={`equipment-action-btn delete ${confirmingDelete ? 'confirming' : ''}`}
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
          className="equipment-action-btn cancel"
          title={text.cancel()}
          onClick={onCancel || onDelete}
        >
          <Icon icon="fa-solid fa-xmark" />
        </button>
        <button
          type="button"
          className="equipment-action-btn save"
          title={text.accept()}
          disabled={!title.trim()}
          onClick={handleSave}
        >
          <Icon icon="fa-solid fa-check" />
        </button>
      </div>
    </div>
  )
}

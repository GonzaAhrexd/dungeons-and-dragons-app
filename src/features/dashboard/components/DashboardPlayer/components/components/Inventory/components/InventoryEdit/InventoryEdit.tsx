import { useText } from '@/features/langs/hooks/useText'
import { inventoryText } from '../../Inventory.langs'
import { Icon } from '@/shared/ui/Icon/Icon'
import { Input } from '@/shared/ui/Input/Input'
import { useInventoryEdit } from '@/features/dashboard/components/DashboardPlayer/hooks'
import type { InventoryEditProps } from '@/features/dashboard/components/DashboardPlayer/interfaces'
import './InventoryEdit.css'

export const InventoryEdit = ({
  initialItem,
  onSave,
  onDelete,
  onCancel,
}: InventoryEditProps) => {
  const text = useText(inventoryText)

  const {
    title,
    setTitle,
    description,
    setDescription,
    quantity,
    setQuantity,
    confirmingDelete,
    handleDeleteClick,
    handleSave,
    handleCancel,
    handleKeyDown,
    isNew,
  } = useInventoryEdit({ initialItem, onSave, onDelete, onCancel })

  const isSaveDisabled = !title.trim()

  return (
    <div
      className="cmp-inventory-edit"
      onClick={e => e.stopPropagation()}
      onKeyDown={handleKeyDown}
    >
      <div className="inventory-edit-inputs">
        <div className="inventory-inputs-stacked">
          <Input
            name="inventory-title"
            theme="gold"
            placeholder={text.inventoryTitlePlaceholder()}
            handlingClass="inventory-input-title"
            htmlAttrs={{
              id: 'inventory-edit-title',
              value: title,
              onChange: e => setTitle(e.target.value),
              autoFocus: true,
            }}
          />
          <Input
            name="inventory-description"
            theme="gold"
            placeholder={text.inventoryDescPlaceholder()}
            handlingClass="inventory-input-desc"
            htmlAttrs={{
              id: 'inventory-edit-desc',
              value: description,
              onChange: e => setDescription(e.target.value),
            }}
          />
        </div>

        <div className="inventory-qty-wrapper">
          <span className="inventory-qty-label">{text.inventoryQtyPlaceholder()}</span>
          <input
            id="inventory-edit-qty"
            name="inventory-qty"
            type="number"
            min={1}
            className="inventory-input-qty"
            value={quantity}
            onChange={e => setQuantity(Math.max(1, parseInt(e.target.value, 10) || 1))}
          />
        </div>
      </div>

      <div className="inventory-edit-actions">
        {!isNew && (
          <button
            type="button"
            className={`inventory-action-btn delete ${confirmingDelete ? 'confirming' : ''}`}
            title={confirmingDelete ? text.confirmDelete() : text.delete()}
            onClick={handleDeleteClick}
          >
            <Icon icon={confirmingDelete ? 'fa-solid fa-triangle-exclamation' : 'fa-solid fa-trash'} />
          </button>
        )}
        <button
          type="button"
          className="inventory-action-btn cancel"
          title={text.cancel()}
          onClick={handleCancel}
        >
          <Icon icon="fa-solid fa-xmark" />
        </button>
        <button
          type="button"
          className="inventory-action-btn save"
          title={text.accept()}
          disabled={isSaveDisabled}
          onClick={handleSave}
        >
          <Icon icon="fa-solid fa-check" />
        </button>
      </div>
    </div>
  )
}

import { useText } from '@/features/langs/hooks/useText'
import { inventoryText } from '../../Inventory.langs'
import { InventoryEdit } from '../InventoryEdit/InventoryEdit'
import type { InventoryListProps } from '@/features/dashboard/components/DashboardPlayer/interfaces'
import './InventoryList.css'

export const InventoryList = ({
  items,
  emptySlots,
  editingIndex = null,
  onItemClick,
  onEmptySlotClick,
  onSaveItem,
  onDeleteItem,
  onCancelItem,
}: InventoryListProps) => {
  const text = useText(inventoryText)

  return (
    <div className="slide cmp-inventory-list">
      {items.map((item, index) => {
        if (editingIndex === index) {
          return (
            <InventoryEdit
              key={item.id || `edit-${index}`}
              initialItem={item}
              onSave={updated => onSaveItem && onSaveItem(index, updated)}
              onDelete={() => onDeleteItem && onDeleteItem(index)}
              onCancel={() => onCancelItem && onCancelItem(index)}
            />
          )
        }

        return (
          <div
            key={item.id}
            className="item-card item-card-row clickable"
            onClick={() => onItemClick && onItemClick(index)}
            title={text.editInventory()}
          >
            <div className="item-details">
              <span className="item-title">{item.title}</span>
              <span className="item-desc">{item.description}</span>
            </div>
            {item.quantity !== undefined && item.quantity > 1 && (
              <div className="qty-badge">x{item.quantity}</div>
            )}
          </div>
        )
      })}

      {Array.from({ length: emptySlots }).map((_, index) => (
        <div
          key={`empty-inv-${index}`}
          className="empty-slot clickable"
          onClick={() => onEmptySlotClick && onEmptySlotClick()}
          title={text.addInventory()}
        >
          <span>{text.emptySlot()}</span>
        </div>
      ))}
    </div>
  )
}

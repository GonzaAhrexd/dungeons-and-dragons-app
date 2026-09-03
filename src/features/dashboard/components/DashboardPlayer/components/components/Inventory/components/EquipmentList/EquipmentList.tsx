import { useText } from '@/features/langs/hooks/useText'
import { inventoryText } from '../../Inventory.langs'
import { Icon } from '@/shared/ui/Icon/Icon'
import { EquipmentEdit } from '../EquipmentEdit/EquipmentEdit'
import { EQUIPMENT_ICON_PACKAGE } from '../../hooks/useInventory'
import type { EquipmentListProps } from '../../interfaces'
import './EquipmentList.css'

export const EquipmentList = ({
  items,
  emptySlots,
  editingIndex = null,
  iconPackage = EQUIPMENT_ICON_PACKAGE,
  onItemClick,
  onEmptySlotClick,
  onSaveItem,
  onDeleteItem,
  onCancelItem,
}: EquipmentListProps) => {
  const text = useText(inventoryText)

  return (
    <div className="slide cmp-equipment-list">
      {items.map((item, index) => {
        if (editingIndex === index) {
          return (
            <EquipmentEdit
              key={item.id || `edit-${index}`}
              initialItem={item}
              iconPackage={iconPackage}
              onSave={updated => onSaveItem && onSaveItem(index, updated)}
              onDelete={() => onDeleteItem && onDeleteItem(index)}
              onCancel={() => onCancelItem && onCancelItem(index)}
            />
          )
        }

        return (
          <div
            key={item.id}
            className="item-card clickable"
            onClick={() => onItemClick && onItemClick(index)}
            title={text.editEquipment()}
          >
            <div className="item-icon">
              <Icon icon={item.icon} />
            </div>
            <div className="item-details">
              <span className="item-title">{item.title}</span>
              <span className="item-desc">{item.description}</span>
            </div>
          </div>
        )
      })}

      {Array.from({ length: emptySlots }).map((_, index) => (
        <div
          key={`empty-eq-${index}`}
          className="empty-slot clickable"
          onClick={() => onEmptySlotClick && onEmptySlotClick()}
          title={text.addEquipment()}
        >
          <span>{text.emptySlot()}</span>
        </div>
      ))}
    </div>
  )
}

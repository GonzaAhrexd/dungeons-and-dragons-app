import { useText } from '@/features/langs/hooks/useText'
import { inventoryText } from '../../Inventory.langs'
import type { InventoryListProps } from '../../interfaces'
import './InventoryList.css'

export const InventoryList = ({ items, emptySlots }: InventoryListProps) => {
  const text = useText(inventoryText)

  return (
    <div className="slide cmp-inventory-list">
      {items.map(item => (
        <div key={item.id} className="item-card item-card-row">
          <div className="item-details">
            <span className="item-title">{item.title}</span>
            <span className="item-desc">{item.description}</span>
          </div>
          <div className="qty-badge">x{item.quantity}</div>
        </div>
      ))}

      {Array.from({ length: emptySlots }).map((_, index) => (
        <div key={`empty-inv-${index}`} className="empty-slot">
          <span>{text.emptySlot()}</span>
        </div>
      ))}
    </div>
  )
}

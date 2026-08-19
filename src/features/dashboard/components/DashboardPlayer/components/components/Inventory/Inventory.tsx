import { useText } from '@/features/langs/hooks/useText'
import { inventoryText } from './Inventory.langs'
import { Icon } from '@/shared/ui/Icon/Icon'
import './Inventory.css'

interface InventoryProps {
  inventory: { current: number; max: number; equip: number; gold: number }
}

export const Inventory = ({ inventory }: InventoryProps) => {
  const text = useText(inventoryText)

  return (
    <div className="dp-inventory">
      <div className="dp-inventory-header">
        <span>
          <Icon icon="fa-solid fa-briefcase" /> {text.inventory()}
        </span>
        <span>
          {inventory.current} / {inventory.max}
        </span>
      </div>
      <div className="dp-inventory-row">
        <span className="dp-inv-item">
          <span className="dp-inv-label">{text.equip()}</span>
          <span className="dp-inv-val">{inventory.equip}</span>
        </span>
        <span className="dp-inv-item">
          <span className="dp-inv-label">{text.gold()}</span>
          <span className="dp-inv-val">{inventory.gold}</span>
        </span>
      </div>
    </div>
  )
}

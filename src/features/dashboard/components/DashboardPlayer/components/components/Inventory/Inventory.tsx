import { useState } from 'react'
import { useText } from '@/features/langs/hooks/useText'
import { inventoryText } from './Inventory.langs'
import { Icon } from '@/shared/ui/Icon/Icon'
import { Button } from '@/shared/ui/Button/Button'
import './Inventory.css'

export interface EquipmentItem {
  id: string
  icon: string
  title: string
  description: string
}

export interface InventoryItem {
  id: string
  title: string
  description: string
  quantity: number
}

interface Resource {
  icon: string
  label: string
  value: number
}

interface InventoryProps {
  equipmentItems?: EquipmentItem[]
  inventoryItems?: InventoryItem[]
  resources?: Resource[]
  maxSlots?: number
  onAddItem?: () => void
}

const DEFAULT_EQUIPMENT: EquipmentItem[] = [
  {
    id: 'eq-1',
    icon: 'fa-solid fa-helmet-safety',
    title: 'Yelmo de Hierro',
    description: '+1 CA',
  },
  {
    id: 'eq-2',
    icon: 'fa-solid fa-vest',
    title: 'Pechera de Cuero',
    description: 'Ligera y flexible',
  },
  {
    id: 'eq-3',
    icon: 'fa-solid fa-shoe-prints',
    title: 'Botas de Viaje',
    description: 'Resistentes al lodo',
  },
]

const DEFAULT_INVENTORY: InventoryItem[] = [
  {
    id: 'inv-1',
    title: 'Poción de Curación',
    description: 'Restaura 2d4+2 HP',
    quantity: 3,
  },
  {
    id: 'inv-2',
    title: 'Cuerda de Cáñamo',
    description: '50 pies de largo',
    quantity: 1,
  },
]

const DEFAULT_RESOURCES = [
  { icon: 'fa-solid fa-coins', label: 'Oro', value: 50 },
  { icon: 'fa-solid fa-water', label: 'Mana', value: 1300 },
]

export const Inventory = ({
  equipmentItems = DEFAULT_EQUIPMENT,
  inventoryItems = DEFAULT_INVENTORY,
  resources = DEFAULT_RESOURCES,
  maxSlots = 5,
  onAddItem,
}: InventoryProps) => {
  const text = useText(inventoryText)
  const [activeTab, setActiveTab] = useState<'equipment' | 'inventory'>(
    'equipment',
  )

  const emptyEquipmentSlots = Math.max(0, maxSlots - equipmentItems.length)
  const emptyInventorySlots = Math.max(0, maxSlots - inventoryItems.length)

  return (
    <div className="cmp-inventory">
      <div className="top-bar">
        <div className="resources">
          {resources.map(resource => (
            <div key={resource.label} className="resource-item">
              <div className="resource-icon">
                <Icon icon={resource.icon} />
              </div>
              <div className="resource-info">
                <span className="resource-label">{resource.label}</span>
                <span className="resource-value">{resource.value}</span>
              </div>
            </div>
          ))}
        </div>

        <Button
          theme="primary"
          title={text.add()}
          icon="fa-solid fa-plus"
          handlingClass="add-btn"
          onClick={onAddItem}
        />
      </div>

      <div className="tabs-header">
        <div className="tabs">
          <button
            type="button"
            className={`tab ${activeTab === 'equipment' ? 'active' : ''}`}
            onClick={() => setActiveTab('equipment')}
          >
            {text.equipment()}
          </button>
          <button
            type="button"
            className={`tab ${activeTab === 'inventory' ? 'active' : ''}`}
            onClick={() => setActiveTab('inventory')}
          >
            {text.inventory()}
          </button>
        </div>
      </div>

      <div className="slider-viewport">
        <div
          className="slider-track"
          style={{
            transform:
              activeTab === 'equipment' ? 'translateX(0%)' : 'translateX(-50%)',
          }}
        >
          <div className="slide">
            {equipmentItems.map(item => (
              <div key={item.id} className="item-card">
                <div className="item-icon">
                  <Icon icon={item.icon} />
                </div>
                <div className="item-details">
                  <span className="item-title">{item.title}</span>
                  <span className="item-desc">{item.description}</span>
                </div>
              </div>
            ))}

            {Array.from({ length: emptyEquipmentSlots }).map((_, index) => (
              <div key={`empty-eq-${index}`} className="empty-slot">
                <span>{text.emptySlot()}</span>
              </div>
            ))}
          </div>

          <div className="slide">
            {inventoryItems.map(item => (
              <div key={item.id} className="item-card item-card-row">
                <div className="item-details">
                  <span className="item-title">{item.title}</span>
                  <span className="item-desc">{item.description}</span>
                </div>
                <div className="qty-badge">x{item.quantity}</div>
              </div>
            ))}

            {Array.from({ length: emptyInventorySlots }).map((_, index) => (
              <div key={`empty-inv-${index}`} className="empty-slot">
                <span>{text.emptySlot()}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

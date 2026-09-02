import { useText } from '@/features/langs/hooks/useText'
import { inventoryText } from './Inventory.langs'
import { Button } from '@/shared/ui/Button/Button'
import { Icon } from '@/shared/ui/Icon/Icon'
import { ResourceDetails, ResourceEdit } from './components'
import {
  useInventory,
  DEFAULT_EQUIPMENT,
  DEFAULT_INVENTORY,
  DEFAULT_RESOURCES,
  RESOURCE_ICON_PACKAGE,
} from './hooks/useInventory'
import type {
  EquipmentItem,
  InventoryItem,
  Resource,
  InventoryProps,
} from './interfaces'
import './Inventory.css'

export type { EquipmentItem, InventoryItem, Resource, InventoryProps }

export const Inventory = ({
  equipmentItems = DEFAULT_EQUIPMENT,
  inventoryItems = DEFAULT_INVENTORY,
  resources = DEFAULT_RESOURCES,
  maxSlots = 10,
  onAddItem,
}: InventoryProps) => {
  const text = useText(inventoryText)
  const {
    activeTab,
    setActiveTab,
    resourcesList,
    editingResourceIndex,
    emptyEquipmentSlots,
    emptyInventorySlots,
    handleStartEditResource,
    handleSaveResource,
    handleDeleteResource,
    handleAddNewResource,
  } = useInventory({ equipmentItems, inventoryItems, resources, maxSlots })

  return (
    <div className="cmp-inventory">
      <div className="top-bar">
        <div className="top-bar-header">
          <div className="resources-title-wrapper">
            <Icon icon="fa-solid fa-box-open" />
            <span className="resources-title">{text.resources()}</span>
          </div>
          <Button
            theme="primary"
            title={text.add()}
            icon="fa-solid fa-plus"
            handlingClass="add-btn"
            onClick={onAddItem ? onAddItem : handleAddNewResource}
          />
        </div>

        <div className="resources">
          {resourcesList.map((resource, index) => {
            if (editingResourceIndex === index) {
              return (
                <ResourceEdit
                  key={`edit-${index}`}
                  initialIcon={resource.icon}
                  initialLabel={resource.label}
                  initialValue={resource.value}
                  iconPackage={RESOURCE_ICON_PACKAGE}
                  onSave={updated => handleSaveResource(index, updated)}
                  onDelete={() => handleDeleteResource(index)}
                />
              )
            }

            return (
              <ResourceDetails
                key={resource.label || index}
                icon={resource.icon}
                label={resource.label}
                value={resource.value}
                onClick={() => handleStartEditResource(index)}
              />
            )
          })}
        </div>
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

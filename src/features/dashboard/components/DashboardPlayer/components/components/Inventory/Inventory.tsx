import { useText } from '@/features/langs/hooks/useText'
import { inventoryText } from './Inventory.langs'
import { Button } from '@/shared/ui/Button/Button'
import { Icon } from '@/shared/ui/Icon/Icon'
import {
  ResourceDetails,
  ResourceEdit,
  EquipmentList,
  InventoryList,
} from './components'
import {
  useInventory,
  DEFAULT_EQUIPMENT,
  DEFAULT_INVENTORY,
  DEFAULT_RESOURCES,
  RESOURCE_ICON_PACKAGE,
} from './hooks/useInventory'
import type { InventoryProps } from './interfaces'
import './Inventory.css'

export type * from './interfaces'

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
    equipmentList,
    editingEquipmentIndex,
    inventoryList,
    editingInventoryIndex,
    emptyEquipmentSlots,
    emptyInventorySlots,
    handleStartEditResource,
    handleSaveResource,
    handleDeleteResource,
    handleCancelResource,
    handleAddNewResource,
    handleStartEditEquipment,
    handleEmptySlotClick,
    handleSaveEquipment,
    handleDeleteEquipment,
    handleCancelEquipment,
    handleStartEditInventory,
    handleEmptyInventorySlotClick,
    handleSaveInventory,
    handleDeleteInventory,
    handleCancelInventory,
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
                  onCancel={handleCancelResource}
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
          <EquipmentList
            items={equipmentList}
            emptySlots={emptyEquipmentSlots}
            editingIndex={editingEquipmentIndex}
            onItemClick={handleStartEditEquipment}
            onEmptySlotClick={handleEmptySlotClick}
            onSaveItem={handleSaveEquipment}
            onDeleteItem={handleDeleteEquipment}
            onCancelItem={handleCancelEquipment}
          />
          <InventoryList
            items={inventoryList}
            emptySlots={emptyInventorySlots}
            editingIndex={editingInventoryIndex}
            onItemClick={handleStartEditInventory}
            onEmptySlotClick={handleEmptyInventorySlotClick}
            onSaveItem={handleSaveInventory}
            onDeleteItem={handleDeleteInventory}
            onCancelItem={handleCancelInventory}
          />
        </div>
      </div>
    </div>
  )
}

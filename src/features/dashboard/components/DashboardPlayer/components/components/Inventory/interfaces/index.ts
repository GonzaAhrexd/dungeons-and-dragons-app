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

export interface Resource {
  icon: string
  label: string
  value: number
}

export interface InventoryProps {
  equipmentItems?: EquipmentItem[]
  inventoryItems?: InventoryItem[]
  resources?: Resource[]
  maxSlots?: number
  onAddItem?: () => void
}

export interface UseInventoryProps {
  equipmentItems?: EquipmentItem[]
  inventoryItems?: InventoryItem[]
  resources?: Resource[]
  maxSlots?: number
}

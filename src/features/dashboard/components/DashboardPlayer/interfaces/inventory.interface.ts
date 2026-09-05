export interface Inventory {
  current: number
  maxInv: number
  maxEquip: number
  gold: number
}

export interface EquipmentModifier {
  value: number
  attribute: string
}

export interface EquipmentItem {
  id: string
  icon: string
  title: string
  description: string
  modifiers?: EquipmentModifier[]
}

export interface InventoryItem {
  id: string
  title: string
  description: string
  quantity?: number
}

export interface Resource {
  icon: string
  label: string
  value: number
}

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

export interface EquipmentEditProps {
  initialItem?: Partial<EquipmentItem>
  iconPackage: string[]
  onSave: (updated: {
    icon: string
    title: string
    description: string
    modifiers: EquipmentModifier[]
  }) => void
  onDelete: () => void
  onCancel?: () => void
}

export interface ResourceEditProps {
  initialIcon: string
  initialLabel: string
  initialValue: number
  iconPackage: string[]
  onSave: (resource: { icon: string; label: string; value: number }) => void
  onDelete: () => void
  onCancel?: () => void
}

export interface EquipmentListProps {
  items: EquipmentItem[]
  emptySlots: number
  editingIndex?: number | null
  iconPackage?: string[]
  onItemClick?: (index: number) => void
  onEmptySlotClick?: () => void
  onSaveItem?: (
    index: number,
    updated: {
      icon: string
      title: string
      description: string
      modifiers: EquipmentModifier[]
    },
  ) => void
  onDeleteItem?: (index: number) => void
  onCancelItem?: (index: number) => void
}

export interface InventoryListProps {
  items: InventoryItem[]
  emptySlots: number
}

export interface ResourceDetailsProps {
  icon: string
  label: string
  value: number
  onClick?: () => void
}

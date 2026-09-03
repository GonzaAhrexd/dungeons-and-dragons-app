import { useState } from 'react'
import type {
  EquipmentItem,
  InventoryItem,
  Resource,
  UseInventoryProps,
  EquipmentModifier,
} from '../interfaces'

export type { EquipmentItem, InventoryItem, Resource, UseInventoryProps }

export const DEFAULT_EQUIPMENT: EquipmentItem[] = [
  {
    id: 'eq-1',
    icon: 'fa-solid fa-helmet-safety',
    title: 'Yelmo de Hierro',
    description: '+1 CA',
    modifiers: [{ value: 1, attribute: 'CA' }],
  },
  {
    id: 'eq-2',
    icon: 'fa-solid fa-vest',
    title: 'Pechera de Cuero',
    description: 'Ligera y flexible',
    modifiers: [{ value: 1, attribute: 'DES' }],
  },
  {
    id: 'eq-3',
    icon: 'fa-solid fa-shoe-prints',
    title: 'Botas de Viaje',
    description: 'Resistentes al lodo',
    modifiers: [{ value: 1, attribute: 'VEL' }],
  },
]

export const DEFAULT_INVENTORY: InventoryItem[] = [
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

export const RESOURCE_ICON_PACKAGE = [
  'fa-solid fa-coins',
  'fa-solid fa-gem',
  'fa-solid fa-water',
  'fa-solid fa-fire',
  'fa-solid fa-bolt',
  'fa-solid fa-flask',
  'fa-solid fa-scroll',
  'fa-solid fa-feather',
  'fa-solid fa-book-skull',
  'fa-solid fa-shield-halved',
  'fa-solid fa-wand-magic-sparkles',
  'fa-solid fa-skull',
  'fa-solid fa-key',
  'fa-solid fa-clover',
  'fa-solid fa-ring',
  'fa-solid fa-apple-whole',
  'fa-solid fa-wine-glass',
  'fa-solid fa-dungeon',
  'fa-solid fa-hat-wizard',
  'fa-solid fa-hourglass-half',
]

export const EQUIPMENT_ICON_PACKAGE = [
  'fa-solid fa-helmet-safety',
  'fa-solid fa-vest',
  'fa-solid fa-shoe-prints',
  'fa-solid fa-shield-halved',
  'fa-solid fa-shield',
  'fa-solid fa-wand-magic-sparkles',
  'fa-solid fa-ring',
  'fa-solid fa-hat-wizard',
  'fa-solid fa-hand-fist',
  'fa-solid fa-gavel',
  'fa-solid fa-gem',
  'fa-solid fa-crown',
  'fa-solid fa-shirt',
  'fa-solid fa-mitten',
  'fa-solid fa-feather',
  'fa-solid fa-flask',
]

export const ATTRIBUTE_OPTIONS = [
  { value: 'FUE', label: 'FUE' },
  { value: 'DES', label: 'DES' },
  { value: 'CON', label: 'CON' },
  { value: 'INT', label: 'INT' },
  { value: 'SAB', label: 'SAB' },
  { value: 'CAR', label: 'CAR' },
]

export const DEFAULT_RESOURCES: Resource[] = [
  { icon: 'fa-solid fa-coins', label: 'Oro', value: 50 },
  { icon: 'fa-solid fa-water', label: 'Mana', value: 1300 },
]

export const useInventory = ({
  equipmentItems = DEFAULT_EQUIPMENT,
  inventoryItems = DEFAULT_INVENTORY,
  resources = DEFAULT_RESOURCES,
  maxSlots = 10,
}: UseInventoryProps = {}) => {
  const [activeTab, setActiveTab] = useState<'equipment' | 'inventory'>(
    'equipment',
  )
  const [resourcesList, setResourcesList] = useState<Resource[]>(resources)
  const [editingResourceIndex, setEditingResourceIndex] = useState<
    number | null
  >(null)

  const [equipmentList, setEquipmentList] =
    useState<EquipmentItem[]>(equipmentItems)
  const [editingEquipmentIndex, setEditingEquipmentIndex] = useState<
    number | null
  >(null)

  const emptyEquipmentSlots = Math.max(0, maxSlots - equipmentList.length)
  const emptyInventorySlots = Math.max(0, maxSlots - inventoryItems.length)

  const handleStartEditResource = (index: number) => {
    const itemToEdit = resourcesList[index]
    const cleaned = resourcesList.filter(item => item.label.trim() !== '')
    const targetIndex = cleaned.indexOf(itemToEdit)
    setResourcesList(cleaned)

    if (targetIndex >= 0) {
      setEditingResourceIndex(targetIndex)
    } else {
      setEditingResourceIndex(null)
    }
  }

  const handleDeleteResource = (index: number) => {
    setResourcesList(prev =>
      prev.filter((item, i) => i !== index && item.label.trim() !== ''),
    )
    setEditingResourceIndex(null)
  }

  const handleSaveResource = (
    index: number,
    updated: { icon: string; label: string; value: number },
  ) => {
    const trimmedLabel = updated.label.trim()
    if (!trimmedLabel) {
      handleDeleteResource(index)
      return
    }
    setResourcesList(prev => {
      const result = prev.map((item, i) =>
        i === index ? { ...updated, label: trimmedLabel } : item,
      )
      return result.filter(item => item.label.trim() !== '')
    })
    setEditingResourceIndex(null)
  }

  const handleAddNewResource = () => {
    const cleaned = resourcesList.filter(item => item.label.trim() !== '')
    const newResource: Resource = {
      icon: 'fa-solid fa-coins',
      label: '',
      value: 1,
    }
    setResourcesList([...cleaned, newResource])
    setEditingResourceIndex(cleaned.length)
  }

  const handleStartEditEquipment = (index: number) => {
    const cleaned = equipmentList.filter(item => item.title.trim() !== '')
    setEquipmentList(cleaned)
    const targetIndex = cleaned.indexOf(equipmentList[index])
    setEditingEquipmentIndex(targetIndex >= 0 ? targetIndex : index)
  }

  const handleEmptySlotClick = () => {
    if (equipmentList.length >= maxSlots) return
    const cleaned = equipmentList.filter(item => item.title.trim() !== '')
    const newItem: EquipmentItem = {
      id: `eq-${Date.now()}`,
      icon: 'fa-solid fa-shield-halved',
      title: '',
      description: '',
      modifiers: [{ value: 1, attribute: 'CAR' }],
    }
    setEquipmentList([...cleaned, newItem])
    setEditingEquipmentIndex(cleaned.length)
  }

  const handleSaveEquipment = (
    index: number,
    updated: {
      icon: string
      title: string
      description: string
      modifiers: EquipmentModifier[]
    },
  ) => {
    const trimmedTitle = updated.title.trim()
    if (!trimmedTitle) {
      handleDeleteEquipment(index)
      return
    }

    setEquipmentList(prev => {
      const updatedList = prev.map((item, i) =>
        i === index ? { ...item, ...updated, title: trimmedTitle } : item,
      )
      return updatedList.filter(item => item.title.trim() !== '')
    })
    setEditingEquipmentIndex(null)
  }

  const handleDeleteEquipment = (index: number) => {
    setEquipmentList(prev =>
      prev.filter((item, i) => i !== index && item.title.trim() !== ''),
    )
    setEditingEquipmentIndex(null)
  }

  const handleCancelResource = () => {
    setResourcesList(prev => prev.filter(item => item.label.trim() !== ''))
    setEditingResourceIndex(null)
  }

  const handleCancelEquipment = () => {
    setEquipmentList(prev => prev.filter(item => item.title.trim() !== ''))
    setEditingEquipmentIndex(null)
  }

  return {
    activeTab,
    setActiveTab,
    resourcesList,
    editingResourceIndex,
    equipmentList,
    editingEquipmentIndex,
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
  }
}

import type { LanguagesText } from '@/features/langs/interfaces'

interface InventoryTexts {
  equipment: string
  inventory: string
  add: string
  emptySlot: string
  slots: string
}

export const inventoryText: LanguagesText<InventoryTexts> = {
  en: {
    equipment: 'Equipment',
    inventory: 'Inventory',
    add: 'ADD',
    emptySlot: 'Empty Slot',
    slots: 'Slots',
  },
  es: {
    equipment: 'Equipamiento',
    inventory: 'Inventario',
    add: 'AÑADIR',
    emptySlot: 'Ranura Vacía',
    slots: 'Espacios',
  },
}

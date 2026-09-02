import type { LanguagesText } from '@/features/langs/interfaces'

interface InventoryTexts {
  equipment: string
  inventory: string
  add: string
  emptySlot: string
  slots: string
  editResource: string
  resourceNamePlaceholder: string
  delete: string
  accept: string
  resources: string
}

export const inventoryText: LanguagesText<InventoryTexts> = {
  en: {
    equipment: 'Equipment',
    inventory: 'Inventory',
    add: 'ADD',
    emptySlot: 'Empty Slot',
    slots: 'Slots',
    editResource: 'Edit resource',
    resourceNamePlaceholder: 'Name',
    delete: 'Delete',
    accept: 'Accept',
    resources: 'Resources',
  },
  es: {
    equipment: 'Equipamiento',
    inventory: 'Inventario',
    add: 'AÑADIR',
    emptySlot: 'Ranura Vacía',
    slots: 'Espacios',
    editResource: 'Editar recurso',
    resourceNamePlaceholder: 'Nombre',
    delete: 'Borrar',
    accept: 'Aceptar',
    resources: 'Recursos',
  },
}


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
  modifier: string
  equipmentTitlePlaceholder: string
  equipmentDescPlaceholder: string
  addModifier: string
  removeModifier: string
  editEquipment: string
  addEquipment: string
  confirmDelete: string
  cancel: string
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
    modifier: 'MODIFIER',
    equipmentTitlePlaceholder: 'Equipment Title',
    equipmentDescPlaceholder: 'Description',
    addModifier: 'Add modifier',
    removeModifier: 'Remove modifier',
    editEquipment: 'Edit equipment',
    addEquipment: 'Add new equipment',
    confirmDelete: 'Confirm delete',
    cancel: 'Cancel',
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
    modifier: 'BONIFICADOR',
    equipmentTitlePlaceholder: 'Título del equipamiento',
    equipmentDescPlaceholder: 'Descripción',
    addModifier: 'Añadir bonificador',
    removeModifier: 'Eliminar bonificador',
    editEquipment: 'Editar equipamiento',
    addEquipment: 'Añadir nuevo equipamiento',
    confirmDelete: 'Confirmar eliminación',
    cancel: 'Cancelar',
  },
}


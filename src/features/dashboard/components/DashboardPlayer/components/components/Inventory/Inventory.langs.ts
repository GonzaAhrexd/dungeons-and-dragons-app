import type { LanguagesText } from '@/features/langs/interfaces'

interface InventoryTexts {
  inventory: string
  equip: string
  gold: string
}

export const inventoryText: LanguagesText<InventoryTexts> = {
  en: {
    inventory: 'Inventory',
    equip: 'EQUIP',
    gold: 'GOLD',
  },
  es: {
    inventory: 'Inventario',
    equip: 'EQUIPO',
    gold: 'ORO',
  },
}

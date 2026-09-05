import type { Attribute } from './stats.interface'
import type { Inventory } from './inventory.interface'

export interface PlayerCharacter {
  name: string
  level: number
  class: string
  race: string
  alignment: string
  stats: Attribute[]
  inventory: Inventory
  history: string
}

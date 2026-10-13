export interface CreateCharacterRequest {
  name: string
  race?: string
  alignment?: string
  class?: string
  subclass?: string
  level?: number
  backstory?: string
  objective?: string
  strength?: number
  dexterity?: number
  constitution?: number
  intelligence?: number
  wisdom?: number
  charisma?: number
}

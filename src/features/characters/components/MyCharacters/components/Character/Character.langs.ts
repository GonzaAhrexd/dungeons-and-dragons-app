import type { LanguagesText } from '@/features/langs/interfaces'

interface CharacterTexts {
  race: string
  class: string
  subclass: string
  campaign: string
  attributes: string
  attributeList: {
    strenght: string
    dexterity: string
    constitution: string
    intelligence: string
    charity: string
    wisdom: string
  }
  health: string
  unassigned: string
}

export const characterText: LanguagesText<CharacterTexts> = {
  en: {
    race: 'Race',
    class: 'Class',
    subclass: 'Subclass',
    campaign: 'Campaign',
    attributes: 'Attributes',
    health: 'Health',
    unassigned: 'Unassigned',
    attributeList: {
      strenght: 'Strength',
      dexterity: 'Dexterity',
      constitution: 'Constitution',
      intelligence: 'Intelligence',
      charity: 'Charity',
      wisdom: 'Wisdom',
    },
  },
  es: {
    race: 'Raza',
    class: 'Clase',
    subclass: 'Subclase',
    campaign: 'Campaña',
    attributes: 'Atributos',
    health: 'Vida',
    unassigned: 'No asignado',
    attributeList: {
      strenght: 'Fuerza',
      dexterity: 'Destreza',
      constitution: 'Constitución',
      intelligence: 'Inteligencia',
      charity: 'Caridad',
      wisdom: 'Sabiduría',
    },
  },
}

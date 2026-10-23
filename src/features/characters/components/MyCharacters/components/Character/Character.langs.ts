import type { LanguagesText } from '@/features/langs/interfaces'

interface CharacterTexts {
  race: string
  class: string
  subclass: string
  campaign: string
  attributes: string
  attributesAbbreviation: {
    strength: string
    dexterity: string
    constitution: string
    intelligence: string
    charisma: string
    wisdom: string
  }
  attributeList: {
    strenght: string
    dexterity: string
    constitution: string
    intelligence: string
    charisma: string
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
    attributesAbbreviation: {
      strength: 'STR',
      dexterity: 'DEX',
      constitution: 'CON',
      intelligence: 'INT',
      charisma: 'CHA',
      wisdom: 'WIS',
    },
    attributeList: {
      strenght: 'Strength',
      dexterity: 'Dexterity',
      constitution: 'Constitution',
      intelligence: 'Intelligence',
      charisma: 'Charity',
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
    attributesAbbreviation: {
      strength: 'FUE',
      dexterity: 'DES',
      constitution: 'CON',
      intelligence: 'INT',
      charisma: 'CAR',
      wisdom: 'SAB',
    },
    attributeList: {
      strenght: 'Fuerza',
      dexterity: 'Destreza',
      constitution: 'Constitución',
      intelligence: 'Inteligencia',
      charisma: 'Caridad',
      wisdom: 'Sabiduría',
    },
  },
}

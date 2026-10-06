import type { LanguagesText } from '@/features/langs/interfaces'

interface CreateCharacterFormTexts {
  title: string
  description: string
  identity: string
  name: string
  namePlaceholder: string
  race: string
  subclass: string
  subclassPlaceholder: string
  class: string
  campaign: string
  campaignPlaceholder: string
  attributes: string
  attributesHint: string
  strength: string
  dexterity: string
  constitution: string
  intelligence: string
  wisdom: string
  charisma: string
  cancel: string
  submit: string
  selectPlaceholder: string
}

export const createCharacterFormText: LanguagesText<CreateCharacterFormTexts> =
  {
    en: {
      title: 'Forge a new destiny',
      description: 'Give life to a hero ready for the next adventure.',
      identity: 'Character identity',
      name: 'Name',
      namePlaceholder: 'e.g. Elara Moonfall',
      race: 'Race',
      subclass: 'Subclass',
      subclassPlaceholder: 'e.g. College of Lore',
      class: 'Class',
      campaign: 'Campaign',
      campaignPlaceholder: 'e.g. The Crimson Plague',
      attributes: 'Attributes',
      attributesHint: 'Assign values from 1 to 30',
      strength: 'Strength',
      dexterity: 'Dexterity',
      constitution: 'Constitution',
      intelligence: 'Intelligence',
      wisdom: 'Wisdom',
      charisma: 'Charisma',
      cancel: 'Cancel',
      submit: 'Create character',
      selectPlaceholder: 'Select or type',
    },
    es: {
      title: 'Forja un nuevo destino',
      description: 'Dale vida a un héroe listo para la próxima aventura.',
      identity: 'Identidad del personaje',
      name: 'Nombre',
      namePlaceholder: 'ej. Elara Rompe Luna',
      race: 'Raza',
      subclass: 'Subclase',
      subclassPlaceholder: 'ej. Colegio del Saber',
      class: 'Clase',
      campaign: 'Campaña',
      campaignPlaceholder: 'ej. La plaga carmesí',
      attributes: 'Atributos',
      attributesHint: 'Asigna valores del 1 al 30',
      strength: 'Fuerza',
      dexterity: 'Destreza',
      constitution: 'Constitución',
      intelligence: 'Inteligencia',
      wisdom: 'Sabiduría',
      charisma: 'Carisma',
      cancel: 'Cancelar',
      submit: 'Crear personaje',
      selectPlaceholder: 'Seleccionar o escribir',
    },
  }

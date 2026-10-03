import type { LanguagesText } from '@/features/langs/interfaces'

interface CharacterTexts {
  race: string
  class: string
  subclass: string
  campaign: string
  attributes: string
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
  },
  es: {
    race: 'Raza',
    class: 'Clase',
    subclass: 'Subclase',
    campaign: 'Campaña',
    attributes: 'Atributos',
    health: 'Vida',
    unassigned: 'No asignado',
  },
}

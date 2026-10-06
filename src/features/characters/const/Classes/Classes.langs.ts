import type { LanguagesText } from '@/features/langs/interfaces'

export const CLASSES = [
  'artificer',
  'barbarian',
  'bard',
  'bloodHunter',
  'cleric',
  'druid',
  'fighter',
  'monk',
  'paladin',
  'ranger',
  'rogue',
  'sorcerer',
  'warlock',
  'wizard',
] as const

interface ClassesTexts {
  artificer: string
  barbarian: string
  bard: string
  bloodHunter: string
  cleric: string
  druid: string
  fighter: string
  monk: string
  paladin: string
  ranger: string
  rogue: string
  sorcerer: string
  warlock: string
  wizard: string
}

export const classesText: LanguagesText<ClassesTexts> = {
  es: {
    artificer: 'Artífice',
    barbarian: 'Bárbaro',
    bard: 'Bardo',
    bloodHunter: 'Cazador de sangre',
    cleric: 'Clérigo',
    druid: 'Druida',
    fighter: 'Guerrero',
    monk: 'Monje',
    paladin: 'Paladín',
    ranger: 'Explorador',
    rogue: 'Pícaro',
    sorcerer: 'Hechicero',
    warlock: 'Brujo',
    wizard: 'Mago',
  },
  en: {
    artificer: 'Artificer',
    barbarian: 'Barbarian',
    bard: 'Bard',
    bloodHunter: 'Blood Hunter',
    cleric: 'Cleric',
    druid: 'Druid',
    fighter: 'Fighter',
    monk: 'Monk',
    paladin: 'Paladin',
    ranger: 'Ranger',
    rogue: 'Rogue',
    sorcerer: 'Sorcerer',
    warlock: 'Warlock',
    wizard: 'Wizard',
  },
}

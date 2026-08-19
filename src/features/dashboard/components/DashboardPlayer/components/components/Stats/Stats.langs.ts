import type { LanguagesText } from '@/features/langs/interfaces'

interface StatsTexts {
  str: string
  dex: string
  con: string
  int: string
  wis: string
  cha: string
}

export const statsText: LanguagesText<StatsTexts> = {
  en: {
    str: 'STR',
    dex: 'DEX',
    con: 'CON',
    int: 'INT',
    wis: 'WIS',
    cha: 'CHA',
  },
  es: {
    str: 'FUE',
    dex: 'DES',
    con: 'CON',
    int: 'INT',
    wis: 'SAB',
    cha: 'CAR',
  },
}

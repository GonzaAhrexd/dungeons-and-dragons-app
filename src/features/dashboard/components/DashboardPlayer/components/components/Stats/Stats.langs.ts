import type { LanguagesText } from '@/features/langs/interfaces'

interface StatsTexts {
  str: string
  dex: string
  con: string
  int: string
  wis: string
  cha: string
  cancel: string
  save: string
  stats: string
  edit: string
  back: string
}

export const statsText: LanguagesText<StatsTexts> = {
  en: {
    str: 'STR',
    dex: 'DEX',
    con: 'CON',
    int: 'INT',
    wis: 'WIS',
    cha: 'CHA',
    cancel: 'Cancel',
    save: 'Save',
    stats: 'Attributes',
    edit: 'Edit',
    back: 'Back',
  },
  es: {
    str: 'FUE',
    dex: 'DES',
    con: 'CON',
    int: 'INT',
    wis: 'SAB',
    cha: 'CAR',
    cancel: 'Cancelar',
    save: 'Guardar',
    stats: 'Atributos',
    edit: 'Editar',
    back: 'Volver',
  },
}


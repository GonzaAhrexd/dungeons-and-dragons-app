import type { LanguagesText } from '@/features/langs/interfaces'

export const RACES = [
  'human',
  'elf',
  'dwarf',
  'halfling',
  'tiefling',
  'dragonborn',
  'gnome',
  'halfElf',
  'halfOrc',
  'aasimar',
  'goliath',
  'orc',
  'aarakocra',
  'genasi',
  'firbolg',
  'kenku',
  'lizardfolk',
  'tabaxi',
  'triton',
  'bugbear',
  'goblin',
  'hobgoblin',
  'kobold',
  'yuanTi',
  'changeling',
  'kalashtar',
  'shifter',
  'warforged',
  'minotaur',
  'centaur',
  'satyr',
  'leonin',
  'loxodon',
  'simicHybrid',
  'vedalken',
  'fairy',
  'harengon',
  'owlin',
  'plasmoid',
  'autognome',
  'giff',
  'hadozee',
  'astralElf',
  'seaElf',
  'shadarKai',
  'eladrin',
  'tortle',
  'grung',
  'githyanki',
  'githzerai',
  'verdan',
  'locathah',
  'dhampir',
  'hexblood',
  'reborn',
  'duergar',
  'deepGnome',
] as const


interface RacesTexts {
  human: string
  elf: string
  dwarf: string
  halfling: string
  tiefling: string
  dragonborn: string
  gnome: string
  halfElf: string
  halfOrc: string
  aasimar: string
  goliath: string
  orc: string
  aarakocra: string
  genasi: string
  firbolg: string
  kenku: string
  lizardfolk: string
  tabaxi: string
  triton: string
  bugbear: string
  goblin: string
  hobgoblin: string
  kobold: string
  yuanTi: string
  changeling: string
  kalashtar: string
  shifter: string
  warforged: string
  minotaur: string
  centaur: string
  satyr: string
  leonin: string
  loxodon: string
  simicHybrid: string
  vedalken: string
  fairy: string
  harengon: string
  owlin: string
  plasmoid: string
  autognome: string
  giff: string
  hadozee: string
  astralElf: string
  seaElf: string
  shadarKai: string
  eladrin: string
  tortle: string
  grung: string
  githyanki: string
  githzerai: string
  verdan: string
  locathah: string
  dhampir: string
  hexblood: string
  reborn: string
  duergar: string
  deepGnome: string
}

export const racesText: LanguagesText<RacesTexts> = {
  es: {
    human: 'Humano',
    elf: 'Elfo',
    dwarf: 'Enano',
    halfling: 'Mediano',
    tiefling: 'Tiefling',
    halfElf: 'Semielfo',
    halfOrc: 'Semiorco',
    dragonborn: 'Dracónido',
    gnome: 'Gnomo',
    aasimar: 'Aasimar',
    goliath: 'Goliat',
    orc: 'Orco',
    aarakocra: 'Aarakocra',
    genasi: 'Genasi',
    firbolg: 'Firbolg',
    kenku: 'Kenku',
    lizardfolk: 'Hombre lagarto',
    tabaxi: 'Tabaxi',
    triton: 'Tritón',
    bugbear: 'Osgo',
    goblin: 'Goblin',
    hobgoblin: 'Hobgoblin',
    kobold: 'Kobold',
    yuanTi: 'Yuan-ti',
    changeling: 'Cambiaformas',
    kalashtar: 'Kalashtar',
    shifter: 'Cambiante',
    warforged: 'Forjado',
    minotaur: 'Minotauro',
    centaur: 'Centauro',
    satyr: 'Sátiro',
    leonin: 'Leonino',
    loxodon: 'Loxodon',
    simicHybrid: 'Híbrido simic',
    vedalken: 'Vedalken',
    fairy: 'Hada',
    harengon: 'Harengon',
    owlin: 'Owlin',
    plasmoid: 'Plasmoide',
    autognome: 'Autogomo',
    giff: 'Giff',
    hadozee: 'Hadozee',
    astralElf: 'Elfo astral',
    seaElf: 'Elfo marino',
    shadarKai: 'Shadar-kai',
    eladrin: 'Eladrin',
    tortle: 'Tortle',
    grung: 'Grung',
    githyanki: 'Githyanki',
    githzerai: 'Githzerai',
    verdan: 'Verdan',
    locathah: 'Locathah',
    dhampir: 'Dhampiro',
    hexblood: 'Hexblood',
    reborn: 'Renacido',
    duergar: 'Duergar',
    deepGnome: 'Gnomo de las profundidades',
  },
  en: {
    human: 'Human',
    elf: 'Elf',
    dwarf: 'Dwarf',
    halfling: 'Halfling',
    tiefling: 'Tiefling',
    halfElf: 'Half-Elf',
    halfOrc: 'Half-Orc',
    dragonborn: 'Dragonborn',
    gnome: 'Gnome',
    aasimar: 'Aasimar',
    goliath: 'Goliath',
    orc: 'Orc',
    aarakocra: 'Aarakocra',
    genasi: 'Genasi',
    firbolg: 'Firbolg',
    kenku: 'Kenku',
    lizardfolk: 'Lizardfolk',
    tabaxi: 'Tabaxi',
    triton: 'Triton',
    bugbear: 'Bugbear',
    goblin: 'Goblin',
    hobgoblin: 'Hobgoblin',
    kobold: 'Kobold',
    yuanTi: 'Yuan-ti',
    changeling: 'Changeling',
    kalashtar: 'Kalashtar',
    shifter: 'Shifter',
    warforged: 'Warforged',
    minotaur: 'Minotaur',
    centaur: 'Centaur',
    satyr: 'Satyr',
    leonin: 'Leonin',
    loxodon: 'Loxodon',
    simicHybrid: 'Simic Hybrid',
    vedalken: 'Vedalken',
    fairy: 'Fairy',
    harengon: 'Harengon',
    owlin: 'Owlin',
    plasmoid: 'Plasmoid',
    autognome: 'Autognome',
    giff: 'Giff',
    hadozee: 'Hadozee',
    astralElf: 'Astral Elf',
    seaElf: 'Sea Elf',
    shadarKai: 'Shadar-kai',
    eladrin: 'Eladrin',
    tortle: 'Tortle',
    grung: 'Grung',
    githyanki: 'Githyanki',
    githzerai: 'Githzerai',
    verdan: 'Verdan',
    locathah: 'Locathah',
    dhampir: 'Dhampir',
    hexblood: 'Hexblood',
    reborn: 'Reborn',
    duergar: 'Duergar',
    deepGnome: 'Deep Gnome',
  },
}

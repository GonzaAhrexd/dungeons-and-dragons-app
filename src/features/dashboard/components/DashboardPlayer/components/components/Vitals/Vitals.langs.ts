import type { LanguagesText } from '@/features/langs/interfaces'

interface VitalsTexts {
  health: string
  shield: string
}

export const vitalsText: LanguagesText<VitalsTexts> = {
  en: {
    health: 'Health',
    shield: 'Shield',
  },
  es: {
    health: 'Salud',
    shield: 'Escudo',
  },
}

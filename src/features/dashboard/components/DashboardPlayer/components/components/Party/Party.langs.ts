import type { LanguagesText } from '@/features/langs/interfaces'

interface PartyTexts {
  party: string
}

export const partyText: LanguagesText<PartyTexts> = {
  en: {
    party: 'Party',
  },
  es: {
    party: 'Grupo',
  },
}

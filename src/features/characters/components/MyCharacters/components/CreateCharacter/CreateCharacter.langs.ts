import type { LanguagesText } from '@/features/langs/interfaces'

interface CreateCharacterTexts {
  title: string
  description: string
  create: string
}

export const createCharacterText: LanguagesText<CreateCharacterTexts> = {
  en: {
    title: 'Forge a new destiny',
    description: 'Create a character to embark on epic quests.',
    create: 'Create Character',
  },
  es: {
    title: 'Forja un nuevo destino',
    description: 'Crea un personaje para embarcarte en misiones épicas.',
    create: 'Crear Personaje',
  },
}

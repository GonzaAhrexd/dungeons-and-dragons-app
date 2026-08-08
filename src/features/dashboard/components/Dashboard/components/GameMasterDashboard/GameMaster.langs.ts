import type { LanguagesText } from '@/features/langs/interfaces'

interface GameMasterDashboardText {
  title: string
  description: string
}

export const gameMasterDashboardText: LanguagesText<GameMasterDashboardText> = {
  en: {
    title: 'Game Master Dashboard',
    description:
      'Welcome to the Game Master Dashboard! Here you can manage your campaigns, characters, and more.',
  },
  es: {
    title: 'Panel del Game Master',
    description:
      '¡Bienvenido al Panel del Game Master! Aquí podés gestionar tus campañas, personajes y más.',
  },
}

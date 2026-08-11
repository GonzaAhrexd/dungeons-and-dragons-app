import type { LanguagesText } from '@/features/langs/interfaces'

interface GameMasterDashboardText {
  title: string
  description: string
  actions: string
  campaignActions: {
    users: string
    logs: string
    settings: string
    spells: string
  }
}

export const gameMasterDashboardText: LanguagesText<GameMasterDashboardText> = {
  en: {
    title: 'Game Master Dashboard',
    description:
      'Welcome to the Game Master Dashboard! Here you can manage your campaigns, characters, and more.',
    actions: 'Actions',
    campaignActions: {
      users: 'Users',
      logs: 'Logs',
      settings: 'Settings',
      spells: 'Spells',
    },
  },
  es: {
    title: 'Panel del Game Master',
    description:
      '¡Bienvenido al Panel del Game Master! Aquí podés gestionar tus campañas, personajes y más.',
    actions: 'Acciones',
    campaignActions: {
      users: 'Usuarios',
      logs: 'Registros',
      settings: 'Ajustes',
      spells: 'Hechizos',
    },
  },
}

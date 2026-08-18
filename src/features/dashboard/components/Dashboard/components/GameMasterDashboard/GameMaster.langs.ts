import type { LanguagesText } from '@/features/langs/interfaces'

interface GameMasterDashboardText {
  actions: string
  campaignActions: {
    home: string
    users: string
    logs: string
    settings: string
    spells: string
  }
}

export const gameMasterDashboardText: LanguagesText<GameMasterDashboardText> = {
  en: {
    actions: 'Actions',
    campaignActions: {
      home: 'Home',
      users: 'Users',
      logs: 'Logs',
      settings: 'Settings',
      spells: 'Spells',
    },
  },
  es: {
    actions: 'Acciones',
    campaignActions: {
      home: 'Inicio',
      users: 'Usuarios',
      logs: 'Registros',
      settings: 'Ajustes',
      spells: 'Hechizos',
    },
  },
}

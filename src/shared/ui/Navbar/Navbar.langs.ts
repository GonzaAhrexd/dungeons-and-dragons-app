import type { LanguagesText } from '@/features/langs/interfaces'

interface NavbarTexts {
  campaigns: string
  dashboard: string
  mycharacters: string
  logout: string
}

export const homeText: LanguagesText<NavbarTexts> = {
  en: {
    campaigns: 'Campaigns',
    dashboard: 'Dashboard',
    mycharacters: 'My Characters',
    logout: 'Log Out',
  },
  es: {
    campaigns: 'Campañas',
    dashboard: 'Panel de control',
    mycharacters: 'Mis Personajes',
    logout: 'Cerrar sesión',
  },
}


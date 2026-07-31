import type { LanguagesText } from '@/features/langs/interfaces'

interface NavbarTexts {
  dashboard: string
  campaigns: string
  mycharacters: string
}

export const homeText: LanguagesText<NavbarTexts> = {
  en: {
    dashboard: 'Dashboard',
    campaigns: 'Campaigns',
    mycharacters: 'My Characters',
  },
  es: {
    dashboard: 'Panel de control',
    campaigns: 'Campañas',
    mycharacters: 'Mis Personajes',
  },
}

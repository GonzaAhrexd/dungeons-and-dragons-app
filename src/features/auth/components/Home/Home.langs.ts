import type { LanguagesText } from '@/features/langs/interfaces'

interface HomeTexts {
  title: string
  description: string
  signup: string
  login: string
}

export const homeText: LanguagesText<HomeTexts> = {
  en: {
    title: 'Dungeons and Dragons App',
    description:
      'The ultimate tool for managing your Dungeons and Dragons campaigns where you can create and manage your characters, track your adventures, and connect with other players. Join us and embark on an epic journey!',
    signup: 'Sign up',
    login: 'Log in',
  },
  es: {
    title: 'Dungeons and Dragons App',
    description:
      'La herramienta definitiva para gestionar tus campañas de Dungeons and Dragons donde podés crear y gestionar tus personajes, seguir tus aventuras y conectarte con otros jugadores. ¡Unite a nosotros y embárcate en un viaje épico!',
    signup: 'Regístrate',
    login: 'Iniciar sesión',
  },
}

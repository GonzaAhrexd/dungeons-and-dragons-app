import type { LanguagesText } from '@/features/langs/interfaces'

interface LoginTexts {
  username: string
  password: string
  login: string
}

export const loginText: LanguagesText<LoginTexts> = {
  en: {
    username: 'Username',
    password: 'Password',
    login: 'Log in',
  },
  es: {
    username: 'Nombre de usuario',
    password: 'Contraseña',
    login: 'Iniciar sesión',
  },
}

import type { LanguagesText } from '@/features/langs/interfaces'

interface RegisterTexts {
  username: string
  password: string
  repeatPassword: string
  signup: string
}

export const registerText: LanguagesText<RegisterTexts> = {
  en: {
    username: 'Username',
    password: 'Password',
    repeatPassword: 'Repeat password',
    signup: 'Sign up',
  },
  es: {
    username: 'Nombre de usuario',
    password: 'Contraseña',
    repeatPassword: 'Repetir la contraseña',
    signup: 'Registrarse',
  },
}

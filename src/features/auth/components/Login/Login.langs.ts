import type { LanguagesText } from '@/features/langs/interfaces'

interface LoginTexts {
  username: string
  password: string
  ph_username: string
  ph_password: string
  login: string
}

export const loginText: LanguagesText<LoginTexts> = {
  en: {
    username: 'Username',
    ph_username: 'Identify yourself, adventurer',
    password: 'Password',
    ph_password: 'Enter the secret word',
    login: 'Log in',
  },
  es: {
    username: 'Nombre de usuario',
    ph_username: 'Identificate, aventurero',
    password: 'Contraseña',
    ph_password: 'Ingresa la palabra secreta',
    login: 'Iniciar sesión',
  },
}

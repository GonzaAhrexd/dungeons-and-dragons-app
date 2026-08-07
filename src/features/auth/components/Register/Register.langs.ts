import type { LanguagesText } from '@/features/langs/interfaces'

interface RegisterTexts {
  username: string
  password: string
  repeatPassword: string
  signup: string
  ph_username: string
  ph_password: string
  ph_repeat_password: string
}

export const registerText: LanguagesText<RegisterTexts> = {
  en: {
    username: 'Username',
    password: 'Password',
    repeatPassword: 'Repeat password',
    signup: 'Sign up',
    ph_username: 'Enter your adventurer name',
    ph_password: 'Enter your secret word',
    ph_repeat_password: 'Repeat your secret word',
  },
  es: {
    username: 'Nombre de usuario',
    password: 'Contraseña',
    repeatPassword: 'Repetir la contraseña',
    signup: 'Registrarse',
    ph_username: 'Escribe tu nombre de aventurero',
    ph_password: 'Escribe tu palabra secreta',
    ph_repeat_password: 'Repite la palabra secreta',
  },
}

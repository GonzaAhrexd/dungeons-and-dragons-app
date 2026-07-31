import type { LanguagesText } from '@/features/langs/interfaces'

interface AuthLayoutTexts {
  alreadyHaveAccount: string
  dontHaveAccount: string
  login: string
  signup: string
}

export const authLayoutText: LanguagesText<AuthLayoutTexts> = {
  en: {
    alreadyHaveAccount: 'Already have an account?',
    dontHaveAccount: "Don't have an account?",
    login: 'Log in',
    signup: 'Sign up',
  },
  es: {
    alreadyHaveAccount: '¿Ya tenes una cuenta?',
    dontHaveAccount: '¿No tenes una cuenta?',
    login: 'Iniciar sesión',
    signup: 'Regístrate',
  },
}

import type { LanguagesText } from '@/features/langs/interfaces'

interface PerfilTexts {
  accountManagement: string
  username: string
  avatarScroll: string
  avatarPlaceholder: string
  currentSecretWord: string
  currentPasswordPlaceholder: string
  newDecree: string
  newPasswordPlaceholder: string
  confirmSeal: string
  confirmPasswordPlaceholder: string
  updateDecree: string
  successMsg: string
  passwordMismatch: string
}

export const perfilText: LanguagesText<PerfilTexts> = {
  en: {
    accountManagement: 'Account Management',
    username: 'USERNAME',
    avatarScroll: 'AVATAR (URL)',
    avatarPlaceholder: 'Paste link to image...',
    currentSecretWord: 'CURRENT SECRET WORD',
    currentPasswordPlaceholder: 'Enter current password...',
    newDecree: 'NEW DECREE (PASSWORD)',
    newPasswordPlaceholder: 'Enter new password...',
    confirmSeal: 'CONFIRM SEAL',
    confirmPasswordPlaceholder: 'Repeat new password...',
    updateDecree: 'UPDATE DECREE',
    successMsg: 'Your decree has been recorded in the guild archives.',
    passwordMismatch: 'The new decree and confirm seal must match.',
  },
  es: {
    accountManagement: 'Gestión de Cuenta',
    username: 'NOMBRE DE JUGADOR',
    avatarScroll: 'AVATAR (URL)',
    avatarPlaceholder: 'Pegar enlace de imagen...',
    currentSecretWord: 'PALABRA SECRETA ACTUAL',
    currentPasswordPlaceholder: 'Ingresa tu contraseña actual...',
    newDecree: 'NUEVO DECRETO (CONTRASEÑA)',
    newPasswordPlaceholder: 'Ingresa tu nueva contraseña...',
    confirmSeal: 'CONFIRMAR SELLO',
    confirmPasswordPlaceholder: 'Repite tu nueva contraseña...',
    updateDecree: 'ACTUALIZAR DECRETO',
    successMsg: 'Tu decreto ha sido registrado en los archivos del gremio.',
    passwordMismatch: 'El nuevo decreto y la confirmación del sello deben coincidir.',
  },
}

import type { LanguagesText } from '@/features/langs/interfaces'

interface AddPlayersText {
  title: string
  description: string
  usernameLabel: string
  usernamePlaceholder: string
  buttonTitle: string
  helperText: string
}

export const addPlayersText: LanguagesText<AddPlayersText> = {
  en: {
    title: 'Add new player',
    description:
      'Extend an official parchment to a worthy soul to join the ranks of this expedition.',
    usernameLabel: 'Adventurer name or email',
    usernamePlaceholder: 'e.g. JuanElGrande or juanelgrande@realms.com',
    buttonTitle: 'Send invitation',
    helperText:
      'The invitee will receive an owl with a direct link to the preliminary character sheet.',
  },
  es: {
    title: 'Agregar nuevo jugador',
    description:
      'Extiende un pergamino oficial a un alma digna para unirse a las filas de esta expedición.',
    usernameLabel: 'Nombre de aventurero o email',
    usernamePlaceholder: 'ej. JuanElGrande o juanelgrande@reinos.com',
    buttonTitle: 'Enviar invitación',
    helperText:
      'El invitado recibirá un mensaje con un enlace directo a la hoja de personaje preliminar.',
  },
}

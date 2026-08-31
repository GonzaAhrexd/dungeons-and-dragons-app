import type { LanguagesText } from '@/features/langs/interfaces'

interface PlayersListText {
  title: string
  searchPlaceholder: string
  description: string
  noPlayers: string
}

export const playerListText: LanguagesText<PlayersListText> = {
  en: {
    title: 'Players',
    searchPlaceholder: 'Search players...',
    description: 'Manage your players and their characters.',
    noPlayers: 'No players found.',
  },
  es: {
    title: 'Jugadores',
    searchPlaceholder: 'Buscar jugadores...',
    description: 'Administra tus jugadores y sus personajes.',
    noPlayers: 'No se encontraron jugadores.',
  },
}

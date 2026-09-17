import { create } from 'zustand'
import type { GameMasterMockData } from '../interfaces'
import type { ActivePlayer, PendingInvitation } from '../interfaces/active-players.interface'

interface GameMasterState {
  currentSection: string
  mockData: GameMasterMockData
  setCurrentSection: (section: string) => void
  setMockData: (data: Partial<GameMasterMockData>) => void
}

const INITIAL_MOCK_PLAYERS: ActivePlayer[] = [
  {
    id: '1',
    playerId: 'p1',
    username: 'GONZAAHRE',
    characterName: 'GONZAAHRE',
    characterClass: 'Paladín del Juramento',
    race: 'Humano',
    level: 4,
    avatarUrl: '/avatar.png',
    hp: { current: 34, max: 38 },
  },
  {
    id: '2',
    playerId: 'p2',
    username: 'ELANOR_SOMBRA',
    characterName: 'ELANOR_SOMBRA',
    characterClass: 'Hechicera Dracónica',
    race: 'Elfa',
    level: 3,
    avatarUrl: '/avatar.png',
    hp: { current: 22, max: 22 },
  },
  {
    id: '3',
    playerId: 'p3',
    username: 'THORIN_BARBA',
    characterName: 'THORIN_BARBA',
    characterClass: 'Maestro de Batalla',
    race: 'Enano',
    level: 4,
    avatarUrl: '/avatar.png',
    hp: { current: 28, max: 45 },
  },
]

const INITIAL_MOCK_INVITATIONS: PendingInvitation[] = [
  {
    id: 'inv1',
    invitationId: 'inv1',
    username: 'bardo_errante@gmail.com',
    state: 'pending',
    sentAt: 'Enviada hace 2 horas',
  },
]

const INITIAL_MOCK_DATA: GameMasterMockData = {
  act: 'ACTO I - LA SOMBRA DEL DRAGÓN',
  playersMax: 6,
  session: '#04',
  nextSessionDate: new Date('2026-09-14T16:43:00').toISOString(),
  players: INITIAL_MOCK_PLAYERS,
  invitations: INITIAL_MOCK_INVITATIONS,
}

export const useGameMasterStore = create<GameMasterState>(set => ({
  currentSection: 'home',
  mockData: INITIAL_MOCK_DATA,
  setCurrentSection: section => set({ currentSection: section }),
  setMockData: data =>
    set(state => ({
      mockData: { ...state.mockData, ...data },
    })),
}))

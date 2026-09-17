import { create } from 'zustand'
import type { GameMasterMockData } from '../interfaces'
import type {
  ActivePlayer,
  PendingInvitation,
} from '../interfaces/active-players.interface'

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

import type { CampaignLogItem } from '../interfaces/logs.interface'

const INITIAL_MOCK_LOGS: CampaignLogItem[] = [
  {
    id: 'log1',
    time: '18:42',
    type: 'saving_throw',
    tagLabel: 'SALVACIÓN',
    actor: 'TEST123',
    actionText: 'lanzó salvación de Sabiduría:',
    highlightText: '¡Éxito! (18)',
    formula: 'Fórmula: 1d20 [15] + 3 Bono = 18',
  },
  {
    id: 'log2',
    time: '18:30',
    type: 'narrative',
    tagLabel: 'NARRATIVA',
    actor: 'DM',
    actionText: 'añadió una nueva pista al códice:',
    description: '"La Llave de Hueso del Templo Olvidado".',
  },
  {
    id: 'log3',
    time: '18:15',
    type: 'spell',
    tagLabel: 'CONJURO',
    actor: 'ELANOR_SOMBRA',
    actionText: 'canalizó',
    spellName: 'Proyectil Mágico',
    description: '(Nv. 1). Daño infligido:',
    highlightText: '11 de Fuerza.',
  },
  {
    id: 'log4',
    time: '18:02',
    type: 'initiative',
    tagLabel: 'INICIATIVA',
    actionText: 'Se inició el combate:',
    highlightText: 'Ronda 1 contra 4 Goblins del Bosque.',
  },
  {
    id: 'log5',
    time: '18:02',
    type: 'initiative',
    tagLabel: 'INICIATIVA',
    actionText: 'Se inició el combate:',
    highlightText: 'Ronda 1 contra 4 Goblins del Bosque.',
  },
  {
    id: 'log6',
    time: '18:02',
    type: 'initiative',
    tagLabel: 'INICIATIVA',
    actionText: 'Se inició el combate:',
    highlightText: 'Ronda 1 contra 4 Goblins del Bosque.',
  },

  {
    id: 'log7',
    time: '18:02',
    type: 'initiative',
    tagLabel: 'INICIATIVA',
    actionText: 'Se inició el combate:',
    highlightText: 'Ronda 1 contra 4 Goblins del Bosque.',
  },
]

const INITIAL_MOCK_DATA: GameMasterMockData = {
  act: 'ACTO I - LA SOMBRA DEL DRAGÓN',
  playersMax: 6,
  session: '#04',
  nextSessionDate: new Date('2026-09-14T16:43:00').toISOString(),
  players: INITIAL_MOCK_PLAYERS,
  invitations: INITIAL_MOCK_INVITATIONS,
  logs: INITIAL_MOCK_LOGS,
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

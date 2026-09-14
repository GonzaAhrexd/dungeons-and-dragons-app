import { create } from 'zustand'
import type { GameMasterMockData } from '../interfaces'

interface GameMasterState {
  currentSection: string
  mockData: GameMasterMockData
  setCurrentSection: (section: string) => void
  setMockData: (data: Partial<GameMasterMockData>) => void
}

const INITIAL_MOCK_DATA: GameMasterMockData = {
  act: 'ACTO I - LA SOMBRA DEL DRAGÓN',
  playersMax: 6,
  session: '#04',
  nextSessionDate: new Date('2026-09-14T16:43:00').toISOString(),
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

import { create } from 'zustand'

interface GameMasterState {
  currentSection: string
  setCurrentSection: (section: string) => void
}
export const useGameMasterStore = create<GameMasterState>(set => ({
  currentSection: 'home',
  setCurrentSection: section => set({ currentSection: section }),
}))

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface CampaignState {
  currentCampaignId: string
  isGameMaster: boolean
  setCurrentCampaignId: (id: string) => void
  setIsGameMaster: (isGM: boolean) => void
  reset: () => void
}

export const useCampaignStore = create<CampaignState>()(
  persist(
    set => ({
      currentCampaignId: '',
      isGameMaster: false,
      setCurrentCampaignId: id => set({ currentCampaignId: id }),
      setIsGameMaster: (isGM: boolean) => set({ isGameMaster: isGM }),
      reset: () => set({ currentCampaignId: '', isGameMaster: false }),
    }),
    {
      name: 'campaign-dyd-storage',
      partialize: state => ({
        currentCampaignId: state.currentCampaignId,
        isGameMaster: state.isGameMaster,
      }),
    },
  ),
)

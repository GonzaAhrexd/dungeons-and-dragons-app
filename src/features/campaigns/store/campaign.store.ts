import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface CampaignState {
  currentCampaignId: string
  setCurrentCampaignId: (id: string) => void
  reset: () => void
}

export const useCampaignStore = create<CampaignState>()(
  persist(
    set => ({
      currentCampaignId: '',
      setCurrentCampaignId: id => set({ currentCampaignId: id }),
      reset: () => set({ currentCampaignId: '' }),
    }),
    {
      name: 'campaign-dyd-storage',
      partialize: state => ({ currentCampaignId: state.currentCampaignId }),
    },
  ),
)

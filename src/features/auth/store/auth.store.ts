import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { UserProfile } from '../interfaces'

interface AuthState {
  accessToken: string | null
  refreshToken: string | null
  user: UserProfile | null
  logout: () => void
  setUser: (user: UserProfile | null) => void
  setTokens: (accessToken: string | null, refreshToken: string | null) => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    set => ({
      accessToken: null,
      refreshToken: null,
      user: null,
      setUser: user => set({ user }),
      setTokens: (token, refreshToken) =>
        set({ accessToken: token, refreshToken }),
      logout: () => set({ accessToken: null, refreshToken: null, user: null }),
    }),
    {
      name: 'auth-dyd-storage',
      partialize: state => ({
        refreshToken: state.refreshToken,
        user: state.user,
      }),
    },
  ),
)

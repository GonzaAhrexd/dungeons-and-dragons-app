import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { UserProfile } from '../interfaces'

interface AuthState {
  token: string | null
  user: UserProfile | null
  logout: () => void
  setUser: (user: UserProfile | null) => void
  setToken: (token: string | null) => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    set => ({
      token: null,
      user: null,
      setUser: user => set({ user }),
      setToken: token => set({ token }),
      logout: () => set({ token: null, user: null }),
    }),
    {
      name: 'auth-dyd-storage',
    },
  ),
)

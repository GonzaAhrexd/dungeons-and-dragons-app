import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type Language = 'es' | 'en'

const SUPPORTED: Language[] = ['es', 'en']

const detectLocale = (): Language => {
  const browser = navigator.language.split('-')[0]
  return SUPPORTED.includes(browser as Language) ? (browser as Language) : 'en'
}

interface LocaleStore {
  language: Language
  setLanguage: (language: Language) => void
}

export const useLanguageStore = create<LocaleStore>()(
  persist(
    set => ({
      language: detectLocale(),
      setLanguage: language => set({ language }),
    }),
    {
      name: 'language-dyd-storage',
      partialize: state => ({
        language: state.language,
      }),
    },
  ),
)

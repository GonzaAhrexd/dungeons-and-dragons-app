import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type {
  VitalBar,
  Attribute,
} from '../components/DashboardPlayer/interfaces'

export interface PartyMember {
  name: string
}

export interface TimelineItem {
  season: string
  event: string
}

export interface NPCItem {
  name: string
}

export interface Chronicle {
  title: string
  description: string
}

export interface Inventory {
  current: number
  maxInv: number
  maxEquip: number
  gold: number
}

export interface PlayerCharacter {
  name: string
  level: number
  class: string
  race: string
  alignment: string
  stats: Attribute[]
  inventory: Inventory
  history: string
}

export const ATTRIBUTES: Attribute[] = [
  { id: 'str', name: 'Fuerza', abbreviation: 'FUE', value: 13 },
  { id: 'dex', name: 'Destreza', abbreviation: 'DES', value: 14 },
  { id: 'con', name: 'Constitución', abbreviation: 'CON', value: 12 },
  { id: 'int', name: 'Inteligencia', abbreviation: 'INT', value: 11 },
  { id: 'wis', name: 'Sabiduría', abbreviation: 'SAB', value: 14 },
  { id: 'cha', name: 'Carisma', abbreviation: 'CAR', value: 9 },
]

const INITIAL_CHARACTER: PlayerCharacter = {
  name: 'Eleos',
  level: 2,
  class: 'Monje',
  race: 'Tifflyng',
  alignment: 'Neutralmente bueno',
  stats: ATTRIBUTES,
  inventory: { current: 6, maxInv: 10, maxEquip: 8, gold: 50 },
  history: `Naci como un tiefling en un pueblo donde siempre fui rechazado por mi apariencia. Cansado del desprecio, abandone mi hogar y me refugie en unas montanas que admiraba desde nino. Alli encontre un antiguo monasterio donde aprendi a dominar mi cuerpo y mi mente mediante la disciplina zen, dejando atras el rencor, aunque nunca llegue a confiar plenamente en los demas. Tras completar mi entrenamiento, mi maestro me animo a conocer otras culturas y lugares, por lo que me uni a la tripulacion de una nave espacial como viajero.`,
}

const INITIAL_VITALS: VitalBar[] = [
  {
    id: '1',
    current: 13,
    max: 15,
    color: 'red',
    label: 'Vida',
  },
  {
    id: '2',
    current: 3,
    max: 10,
    color: 'blue',
    label: 'Escudo',
  },
]

const INITIAL_PARTY: PartyMember[] = [
  { name: 'Bartok' },
  { name: 'Pierce' },
  { name: 'Faurin' },
  { name: 'Jogun' },
  { name: 'Kaelen' },
  { name: 'Garrick' },
]

const INITIAL_TIMELINE: TimelineItem[] = [
  {
    season: 'Month of the High Sun, 1342',
    event:
      'Arrival at the Whispering Woods. First contact with the Thornwalkers.',
  },
  {
    season: 'Autumn Equinox, 1342',
    event: 'The Battle of the Crypt of Souls. Recovery of the Shard.',
  },
  {
    season: "Winter's Breath, 1342",
    event: "Assassination attempt by the Mire Witch's familiar near Ashenveil.",
  },
  {
    season: 'Month of the High Sun, 1342',
    event:
      'Arrival at the Whispering Woods. First contact with the Thornwalkers.',
  },
  {
    season: 'Autumn Equinox, 1342',
    event: 'The Battle of the Crypt of Souls. Recovery of the Shard.',
  },
]

const INITIAL_NPCS: NPCItem[] = [
  { name: 'Silas' },
  { name: 'Chancellor' },
  { name: 'Mayor' },
  { name: 'Farmer' },
  { name: 'Miner' },
  { name: 'Blacksmith' },
  { name: 'Innkeeper' },
  { name: 'Merchant' },
]

const INITIAL_CHRONICLE: Chronicle = {
  title: 'Chronicle of the Iron Throne',
  description:
    'The Fellowship of the Guild was summoned by the Grand Chancellery after the mysterious disappearance of the Archmage Silas. Evidence found in his secret sanctum points to a shadowy organization known as the Ashen Compact, operating from the ruins of the ancient capital. Current intelligence suggests the cult is actively gathering necrotic essence from forgotten battlefields to fuel a ritual of unprecedented scale—one that could permanently unravel the cosmic Veil and plunge the mortal realm of Valoria into eternal darkness. The party must act swiftly to intercept their agents before the ritual begins.',
}

interface PlayerStoreState {
  character: PlayerCharacter
  vitals: VitalBar[]
  party: PartyMember[]
  timeline: TimelineItem[]
  npcs: NPCItem[]
  chronicle: Chronicle

  setVitals: (vitals: VitalBar[]) => void
  setStats: (stats: Attribute[]) => void
  setCharacter: (character: Partial<PlayerCharacter>) => void
  setParty: (party: PartyMember[]) => void
  setTimeline: (timeline: TimelineItem[]) => void
  setNpcs: (npcs: NPCItem[]) => void
  setChronicle: (chronicle: Chronicle) => void
  reset: () => void
}

export const usePlayerStore = create<PlayerStoreState>()(
  persist(
    set => ({
      character: INITIAL_CHARACTER,
      vitals: INITIAL_VITALS,
      party: INITIAL_PARTY,
      timeline: INITIAL_TIMELINE,
      npcs: INITIAL_NPCS,
      chronicle: INITIAL_CHRONICLE,

      setVitals: vitals => set({ vitals }),
      setStats: stats =>
        set(state => ({
          character: { ...state.character, stats },
        })),
      setCharacter: character =>
        set(state => ({
          character: { ...state.character, ...character },
        })),
      setParty: party => set({ party }),
      setTimeline: timeline => set({ timeline }),
      setNpcs: npcs => set({ npcs }),
      setChronicle: chronicle => set({ chronicle }),
      reset: () =>
        set({
          character: INITIAL_CHARACTER,
          vitals: INITIAL_VITALS,
          party: INITIAL_PARTY,
          timeline: INITIAL_TIMELINE,
          npcs: INITIAL_NPCS,
          chronicle: INITIAL_CHRONICLE,
        }),
    }),
    {
      name: 'player-dashboard-dyd-storage',
    },
  ),
)

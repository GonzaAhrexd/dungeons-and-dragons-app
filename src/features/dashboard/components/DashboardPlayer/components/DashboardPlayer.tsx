import { useState } from 'react'
import { Link } from 'wouter'
import { Icon } from '@/shared/ui/Icon/Icon'
import { useText } from '@/features/langs/hooks/useText'
import { dashboardPlayerText } from './DashboardPlayer.langs'
import {
  Portrait,
  Vitals,
  Stats,
  Inventory,
  HeroHistory,
  Campaign,
  Timeline,
  NPCs,
  Party,
} from './components'
import { type VitalBar } from '../interfaces'
import './DashboardPlayer.css'

const CHARACTER = {
  name: 'Eleos',
  level: 2,
  class: 'Monje',
  race: 'Tifflyng',
  alignment: 'Neutralmente bueno',
  hp: { current: 32, max: 45 },
  shield: { current: 16, max: 20 },
  stats: [
    { label: 'STR', value: 13 },
    { label: 'DEX', value: 14 },
    { label: 'CON', value: 12 },
    { label: 'INT', value: 11 },
    { label: 'WIS', value: 14 },
    { label: 'CHA', value: 9 },
  ],
  inventory: { current: 6, max: 10, equip: 2, gold: 50 },
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

const PARTY = [
  { name: 'Bartok' },
  { name: 'Pierce' },
  { name: 'Faurin' },
  { name: 'Jogun' },
  { name: 'Kaelen' },
  { name: 'Garrick' },
]

const TIMELINE = [
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
]

const NPCS = [
  { name: 'Silas' },
  { name: 'Chancellor' },
  { name: 'Mayor' },
  { name: 'Farmer' },
  { name: 'Miner' },
  { name: 'Blacksmith' },
  { name: 'Innkeeper' },
  { name: 'Merchant' },
]

const CHRONICLE = {
  title: 'Chronicle of the Iron Throne',
  quote:
    '"The shadows lengthen across the realm of Valoria. What began as a localized uprising in the borderlands has revealed a much darker design the resurrection of the Iron Throne, a relic of primordial tyranny."',
  description:
    'The Fellowship of the Guild was summoned by the Grand Chancellery after the mysterious disappearance of the Archmage Silas. Evidence found in his secret sanctum points to a shadowy organization known as the Ashen Compact, operating from the ruins of the ancient capital. Current intelligence suggests the cult is actively gathering necrotic essence from forgotten battlefields to fuel a ritual of unprecedented scale—one that could permanently unravel the cosmic Veil and plunge the mortal realm of Valoria into eternal darkness. The party must act swiftly to intercept their agents before the ritual begins.',
}
// ---------------------------------------------------------------

export const DashboardPlayer = () => {
  const text = useText(dashboardPlayerText)
  const [vitals, setVitals] = useState<VitalBar[]>(INITIAL_VITALS)
  const [stats, setStats] = useState(CHARACTER.stats)

  return (
    <div className="cmp-dashboardplayer">
      <Link to="/campaigns" className="dp-back">
        <Icon icon="fa-solid fa-arrow-left" /> {text.backToCampaigns()}
      </Link>

      <div className="dp-grid">
        <aside className="dp-left">
          <Portrait
            name={CHARACTER.name}
            level={CHARACTER.level}
            characterClass={CHARACTER.class}
            race={CHARACTER.race}
            alignment={CHARACTER.alignment}
          />

          <Vitals bars={vitals} onSave={setVitals} />

          <Stats stats={stats} onSave={setStats} />

          <Inventory inventory={CHARACTER.inventory} />
        </aside>

        <main className="dp-center">
          <HeroHistory historyText={CHARACTER.history} />

          <Campaign
            title={CHRONICLE.title}
            quote={CHRONICLE.quote}
            description={CHRONICLE.description}
          />
        </main>

        <aside className="dp-right">
          <Timeline timelineItems={TIMELINE} />

          <NPCs npcs={NPCS} />

          <Party partyMembers={PARTY} />
        </aside>
      </div>
    </div>
  )
}

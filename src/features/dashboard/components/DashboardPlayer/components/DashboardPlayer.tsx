import { Link } from 'wouter'
import { Icon } from '@/shared/ui/Icon/Icon'
import { useText } from '@/features/langs/hooks/useText'
import { dashboardPlayerText } from './DashboardPlayer.langs'
import {
  Portrait,
  Vitals,
  Stats,
  Inventory,
  HeroStory,
  Campaign,
  Timeline,
  NPCs,
  Party,
} from './components'
import { usePlayerStore } from '../store/player.store'
import './DashboardPlayer.css'

export const DashboardPlayer = () => {
  const text = useText(dashboardPlayerText)
  const {
    character,
    vitals,
    party,
    timeline,
    npcs,
    chronicle,
    setVitals,
    setStats,
  } = usePlayerStore()

  return (
    <div className="cmp-dashboardplayer">
      <Link to="/campaigns" className="back">
        <Icon icon="fa-solid fa-chevron-left" /> {text.backToCampaigns()}
      </Link>

      <div className="grid">
        <aside className="left">
          <Portrait
            name={character.name}
            level={character.level}
            characterClass={character.class}
            race={character.race}
            alignment={character.alignment}
          />

          <Vitals bars={vitals} onSave={setVitals} />

          <Stats stats={character.stats} onSave={setStats} />
        </aside>

        <main className="center">
          <Inventory />

          <div className="story-container">
            <HeroStory historyText={character.history} />

            <Campaign
              title={chronicle.title}
              description={chronicle.description}
            />
          </div>
        </main>

        <aside className="right">
          <Timeline timelineItems={timeline} />

          <NPCs npcs={npcs} />

          <Party partyMembers={party} />
        </aside>
      </div>
    </div>
  )
}

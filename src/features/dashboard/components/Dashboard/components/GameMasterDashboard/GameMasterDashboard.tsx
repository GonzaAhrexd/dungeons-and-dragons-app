import { useText } from '@/features/langs/hooks/useText'
import { gameMasterDashboardText } from './GameMaster.langs'
import './GameMasterDashboard.css'
import { Icon } from '@/shared/ui/Icon/Icon'
import { HomeSection, UserSection } from './components'
import { useGameMasterStore } from '../../store/gamemaster.store'

export const GameMasterDashboard = () => {
  const text = useText(gameMasterDashboardText)

  const { currentSection, setCurrentSection } = useGameMasterStore()

  const actions = [
    {
      title: text.campaignActions.home(),
      icon: 'fa-solid fa-home',
      onClick: () => setCurrentSection('home'),
      isActive: currentSection === 'home',
    },
    {
      title: text.campaignActions.users(),
      icon: 'fa-solid fa-users',
      onClick: () => setCurrentSection('users'),
      isActive: currentSection === 'users',
    },
    {
      title: text.campaignActions.logs(),
      icon: 'fa-solid fa-list',
      onClick: () => setCurrentSection('logs'),
      isActive: currentSection === 'logs',
    },
    {
      title: text.campaignActions.spells(),
      icon: 'fa-solid fa-book',
      onClick: () => setCurrentSection('spells'),
      isActive: currentSection === 'spells',
    },
    {
      title: text.campaignActions.settings(),
      icon: 'fa-solid fa-gear',
      onClick: () => setCurrentSection('settings'),
      isActive: currentSection === 'settings',
    },
  ]

  return (
    <div className="cmp-game-master-dashboard">
      <nav className="dashboard-tabs">
        {actions.map(action => (
          <button
            key={action.title}
            type="button"
            className={`tab-button ${action.isActive ? 'active' : ''}`}
            onClick={action.onClick}
          >
            <Icon icon={action.icon} />
            <span>{action.title}</span>
            {action.isActive && <span className="active-indicator" />}
          </button>
        ))}
      </nav>

      <div className="dashboard-content">
        {currentSection === 'home' && <HomeSection />}
        {currentSection === 'users' && <UserSection />}
      </div>
    </div>
  )
}

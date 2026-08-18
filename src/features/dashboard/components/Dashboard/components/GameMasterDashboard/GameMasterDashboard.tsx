import { useText } from '@/features/langs/hooks/useText'
import { gameMasterDashboardText } from './GameMaster.langs'
import './GameMasterDashboard.css'
import { useState } from 'react'
import { Icon } from '@/shared/ui/Icon/Icon'
import { Button } from '@/shared/ui/Button/Button'
import { HomeSection, UserSection } from './components'

export const GameMasterDashboard = () => {
  const text = useText(gameMasterDashboardText)

  const [currentSection, setCurrentSection] = useState('home')

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
      <div className="dashboard-actions">
        <div className="actions-header">
          <Icon icon="fa-solid fa-compass" />
          <h1>{text.actions()}</h1>
        </div>
        <div className="actions-list">
          {actions.map(action => (
            <Button
              handlingClass={`action-button ${action.isActive ? 'active' : ''}`}
              title={action.title}
              icon={action.icon}
              column
              theme={'primary'}
              onClick={action.onClick}
            />
          ))}
        </div>
      </div>
      <div className="dashboard-content">
        {currentSection === 'home' && <HomeSection />}
        {currentSection === 'users' && <UserSection />}
      </div>
    </div>
  )
}

import { useText } from '@/features/langs/hooks/useText'
import { gameMasterDashboardText } from './GameMaster.langs'
import './GameMasterDashboard.css'
import { AddPlayers } from './components/AddPlayers/AddPlayers'
import { CampaignInfo } from './components'
import { useState } from 'react'
import { Icon } from '@/shared/ui/Icon/Icon'
import { Button } from '@/shared/ui/Button/Button'

export const GameMasterDashboard = () => {
  const text = useText(gameMasterDashboardText)

  const [currentSection, setCurrentSection] = useState('home')

  const actions = [
    {
      title: text.campaignActions.users(),
      icon: 'fa-solid fa-users',
      onClick: () => setCurrentSection('users'),
    },
    {
      title: text.campaignActions.logs(),
      icon: 'fa-solid fa-list',
      onClick: () => setCurrentSection('logs'),
    },
    {
      title: text.campaignActions.settings(),
      icon: 'fa-solid fa-gear',
      onClick: () => setCurrentSection('settings'),
    },
    {
      title: text.campaignActions.spells(),
      icon: 'fa-solid fa-book',
      onClick: () => setCurrentSection('spells'),
    },
  ]

  return (
    <div className="cmp-game-master-dashboard">
      <h1>{text.title()}</h1>
      <p>{text.description()}</p>

      {currentSection}

      <CampaignInfo
        title="Mockup"
        description="Lorep isum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />

      <div className="dashboard-actions">
        <div className="actions-header">
          <Icon icon="fa-solid fa-compass" />
          <h1>{text.actions()}</h1>
        </div>
        <div className="actions-list">
          {actions.map(action => (
            <Button
              handlingClass="action-button"
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
        <AddPlayers />
      </div>
    </div>
  )
}

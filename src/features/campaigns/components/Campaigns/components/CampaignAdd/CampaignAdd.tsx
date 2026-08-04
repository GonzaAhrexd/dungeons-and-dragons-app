import { Button } from '@/shared/ui/Button/Button'
import './CampaignAdd.css'
import { Icon } from '@/shared/ui/Icon/Icon'
import { useText } from '@/features/langs/hooks/useText'
import { campaignsText } from './CampaignAdd.langs'
import { CampaignAddForm } from './components'
import { useState } from 'react'

type Modes = 'create' | 'join' | null

export const CampaignAdd = () => {
  const text = useText(campaignsText)

  const [isMode, setIsMode] = useState<Modes>(null)

  const onCreateCampaign = () => {
    setIsMode('create')
  }

  const onJoinCampaign = () => {
    setIsMode('join')
  }

  return (
    <div className="cmp-campaign-add">
      <div className={`default ${isMode === null ? 'active' : ''}`}>
        <div className="add-icon">
          <Icon icon="fa-solid fa-plus"></Icon>
        </div>

        <h1>{text.title()}</h1>

        <p className="add-description">{text.description()}</p>
        <div className="add-actions">
          <Button
            title={text.addCampaign()}
            handlingClass="btn btn-create"
            htmlAttrs={{
              onClick: onCreateCampaign,
            }}
          />
          <Button
            title={text.joinCampaign()}
            handlingClass="btn btn-join"
            htmlAttrs={{
              onClick: onJoinCampaign,
            }}
          />
        </div>
      </div>
      <div className={`create ${isMode === 'create' ? 'active' : ''}`}>
        <CampaignAddForm />
      </div>
    </div>
  )
}

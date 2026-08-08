import { Button } from '@/shared/ui/Button/Button'
import './CampaignAdd.css'
import { Icon } from '@/shared/ui/Icon/Icon'
import { useText } from '@/features/langs/hooks/useText'
import { campaignsText } from './CampaignAdd.langs'
import { CampaignAddForm, CampaignJoin } from './components'
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

        <div className="header-group">
          <h1>{text.title()}</h1>
          <p className="add-description">{text.description()}</p>
        </div>
        <div className="add-actions">
          <Button
            title={text.addCampaign()}
            variant="gold"
            handlingClass="btn btn-create"
            htmlAttrs={{
              onClick: onCreateCampaign,
            }}
          />
          <Button
            title={text.joinCampaign()}
            variant="gold-outline"
            handlingClass="btn btn-join"
            htmlAttrs={{
              onClick: onJoinCampaign,
            }}
          />
        </div>
      </div>
      <div className={`create ${isMode === 'create' ? 'active' : ''}`}>
        <button
          type="button"
          className="btn-back"
          onClick={() => setIsMode(null)}
        >
          <Icon icon="fa-solid fa-xmark" />
        </button>
        <CampaignAddForm />
      </div>
      <div className={`join ${isMode === 'join' ? 'active' : ''}`}>
        <button
          type="button"
          className="btn-back"
          onClick={() => setIsMode(null)}
        >
          <Icon icon="fa-solid fa-xmark" />
        </button>
        <CampaignJoin />
      </div>
    </div>
  )
}

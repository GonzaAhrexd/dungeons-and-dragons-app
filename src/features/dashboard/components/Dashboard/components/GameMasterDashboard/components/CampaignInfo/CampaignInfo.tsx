import { Button } from '@/shared/ui/Button/Button'
import './CampaignInfo.css'
import { type SubmitEventHandler } from 'react'
import { Input } from '@/shared/ui/Input/Input'
import { TextArea } from '@/shared/ui/TextArea/TextArea'
import { useEditCampaign } from '@/features/campaigns/hooks/useEditCampaign'
import { useCampaignStore } from '@/features/campaigns/store/campaign.store'
import { parseFormData } from '@/shared/utils'
import { useText } from '@/features/langs/hooks/useText'
import { campaignInfoText } from './CampaignInfo.langs'
import type { CampaignInfoProps } from '../../../../interfaces'
import { useCampaignInfo } from '../../../../hooks'

export const CampaignInfo = ({
  title,
  description,
  players,
  playersMax,
  session,
  act,
  nextSessionDate,
}: CampaignInfoProps) => {
  const {
    editMode,
    isInSession,
    formattedNextSession,
    elapsedTime,
    toggleEditMode,
    setEditMode,
  } = useCampaignInfo(nextSessionDate)
  const campaignId = useCampaignStore(state => state.currentCampaignId)
  const text = useText(campaignInfoText)

  const nextSessionDisplay = isInSession
    ? text.stats.playingFor({ time: elapsedTime })
    : formattedNextSession

  const { mutateAsync: editCampaign } = useEditCampaign()
  const handleEditMode = toggleEditMode

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = async e => {
    e.preventDefault()

    if (!campaignId) {
      console.error('No campaign ID found')
      return
    }

    const formData = new FormData(e.currentTarget)

    const data = parseFormData(formData, {
      name: 'string',
      description: 'string',
    })

    await editCampaign({
      params: { id: campaignId },
      data,
    })

    setEditMode(false)
  }

  return (
    <div className="cmp-campaign-info">
      <div className={`info-display ${!editMode ? 'active' : ''}`}>
        <div className="campaign-heading">
          <div className="campaign-kicker">
            {isInSession && (
              <span className="campaign-status">
                <span className="status-dot" />
                {text.statusLabel()}
              </span>
            )}
            <span className="kicker-meta">
              <span className="meta-act-level">{act}</span>
            </span>
          </div>

          <div className="campaign-title-row">
            <h1>{title || 'CAMPAÑA NUEVA'}</h1>
            <Button
              theme="secondary"
              icon="fa-solid fa-pencil"
              handlingClass="edit-button"
              onClick={handleEditMode}
            />
          </div>
        </div>

        <div className="campaign-stats-grid">
          <div className="campaign-stat-card">
            <span className="stat-label">{text.stats.players()}</span>
            <div className="stat-value">
              <strong className="val-gold">{players}</strong>
              <span className="val-max"> / {playersMax}</span>
            </div>
          </div>

          <div className="campaign-stat-card">
            <span className="stat-label">{text.stats.session()}</span>
            <div className="stat-value">
              <strong>{session}</strong>
            </div>
          </div>

          {nextSessionDisplay && (
            <div className="campaign-stat-card stat-next-session">
              <span className="stat-label">{text.stats.nextSession()}</span>
              <div className="stat-value val-next-session">
                <strong className={isInSession ? 'is-active' : ''}>
                  {nextSessionDisplay}
                </strong>
              </div>
            </div>
          )}
        </div>
      </div>
      <form
        className={`edit-form ${editMode ? 'active' : ''}`}
        onSubmit={handleSubmit}
      >
        <div className="edit-form-heading">
          <div>
            <h2>{text.editFormHeading()}</h2>
          </div>
          <Button
            theme="secondary"
            icon="fa-solid fa-x"
            handlingClass="edit-button"
            onClick={handleEditMode}
          />
        </div>
        <Input
          name="name"
          label={text.editCampaignTitle()}
          defaultValue={title}
        />
        <TextArea
          name="description"
          label={text.editCampaignDescription()}
          defaultValue={description}
        />

        <Button title={text.saveCampaign()} theme="primary" submit loader />
      </form>
    </div>
  )
}

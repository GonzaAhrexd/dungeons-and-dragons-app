import './SettingsSection.css'
import { SwitchButton } from '@/shared/ui/SwitchButton/SwitchButton'
import { Button } from '@/shared/ui/Button/Button'
import { useState, type SubmitEventHandler } from 'react'
import { Input } from '@/shared/ui/Input/Input'
import { useDeleteCampaign } from '@/features/campaigns/hooks/'
import { useCampaignStore } from '@/features/campaigns/store/campaign.store'
import { useText } from '@/features/langs/hooks/useText'
import { settingsSectionText } from './SettingsSection.langs'
export const SettingsSection = () => {
  const text = useText(settingsSectionText)

  const [isDeletionMode, setIsDeletionMode] = useState(false)
  const campaignId = useCampaignStore(state => state.currentCampaignId)
  const { mutateAsync: deleteCampaign } = useDeleteCampaign()

  const handleDeletionCampaign: SubmitEventHandler<
    HTMLFormElement
  > = async e => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const campaignName = formData.get('campaignName') as string

    await deleteCampaign({ campaignId, campaignName })
  }

  return (
    <div className="cmp-settings-section">
      <h1>{text.settings()}</h1>
      <div className={`content ${isDeletionMode ? 'deletion-mode' : ''}`}>
        <div className="inner">
          <div className="items">
            <p>{text.activeCampaign()} </p>
            <SwitchButton />
          </div>

          <Button
            title={text.DeleteButton()}
            theme="secondary"
            onClick={() => setIsDeletionMode(!isDeletionMode)}
          />
        </div>
      </div>

      <div className={`deletion-mode ${isDeletionMode ? 'active' : ''}`}>
        <div className="inner">
          <p>{text.deletionDisclaimer()}</p>
          <form action="" onSubmit={handleDeletionCampaign}>
            <Input name="campaignName" label={text.campaignNameInputLabel()} />
            <Button title={text.confirmButton()} theme="primary" submit />
            <Button
              title={text.CancelButton()}
              theme="secondary"
              onClick={() => setIsDeletionMode(false)}
            />
          </form>
        </div>
      </div>
    </div>
  )
}

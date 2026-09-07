import './AddPlayers.css'
import { Button } from '@/shared/ui/Button/Button'
import { Input } from '@/shared/ui/Input/Input'
import { parseFormData } from '@/shared/utils/formData.util'
import type { SubmitEventHandler } from 'react'
import { gameMasterDashboardText } from './AddPlayer.langs'
import { useText } from '@/features/langs/hooks/useText'
import { useSendInvitation } from '@/features/campaigns/hooks/useSendInvitation'
import { useCampaignStore } from '@/features/campaigns/store/campaign.store'
import { Icon } from '@/shared/ui/Icon/Icon'
export const AddPlayers = () => {
  const { mutateAsync: sendInvitation } = useSendInvitation()
  const campaignId = useCampaignStore(state => state.currentCampaignId)

  const text = useText(gameMasterDashboardText)
  const handleAddPlayer: SubmitEventHandler<HTMLFormElement> = async e => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const data = parseFormData(formData, {
      username: 'string',
    })

    const invitationData = {
      campaignId: campaignId!,
      username: data.username,
    }

    await sendInvitation(invitationData)
  }

  return (
    <section className="cmp-add-players">
      <header className="add-players-heading">
        <span className="add-players-heading-icon">
          <Icon icon="fa-solid fa-user-plus" />
        </span>
        <div>
          <h1>{text.addPlayer()}</h1>
          <p>{text.description()}</p>
        </div>
      </header>
      <form className="add-players-form" onSubmit={handleAddPlayer}>
        <label className="add-players-field" htmlFor="username">
          <div className="add-players-input">
            <Icon icon="fa-regular fa-user" />
            <Input
              id="username"
              name="username"
              placeholder={text.addPlayersForm.usernamePlaceholder()}
              theme="paper"
            />
          </div>
        </label>
        <Button
          handlingClass="add-players"
          icon="fa-regular fa-envelope"
          theme="primary"
          submit
          loader
          title={text.addPlayersForm.buttonTitle()}
        />
      </form>
      <p className="add-players-note">
        <Icon icon="fa-solid fa-circle-info" />
        <span>{text.addPlayersForm.helperText()}</span>
      </p>
    </section>
  )
}

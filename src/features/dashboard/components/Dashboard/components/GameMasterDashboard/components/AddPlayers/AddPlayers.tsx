import './AddPlayers.css'
import { Button } from '@/shared/ui/Button/Button'
import { Input } from '@/shared/ui/Input/Input'
import { parseFormData } from '@/shared/utils/formData.util'
import type { SubmitEventHandler } from 'react'
import { gameMasterDashboardText } from './AddPlayer.langs'
import { useText } from '@/features/langs/hooks/useText'
import { useSendInvitation } from '@/features/campaigns/hooks/useSendInvitation'
import { useCampaignStore } from '@/features/campaigns/store/campaign.store'
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
    <div className="cmp-add-players">
      <h1>{text.addPlayer()}</h1>
      <p>{text.description()}</p>
      <form className="add-players-form" onSubmit={handleAddPlayer}>
        <Input
          name="username"
          placeholder={text.addPlayersForm.usernamePlaceholder()}
          theme="paper"
        />
        <Button
          handlingClass="add-players"
          theme="secondary"
          submit
          loader
          title={text.addPlayersForm.buttonTitle()}
        />
      </form>
    </div>
  )
}

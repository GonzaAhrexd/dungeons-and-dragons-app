import './AddPlayers.css'
import { Button } from '@/shared/ui/Button/Button'
import { Input } from '@/shared/ui/Input/Input'
import { parseFormData } from '@/shared/utils/formData.util'
import type { SubmitEventHandler } from 'react'
import { gameMasterDashboardText } from './AddPlayer.langs'
import { useText } from '@/features/langs/hooks/useText'
export const AddPlayers = () => {
  const text = useText(gameMasterDashboardText)
  const handleAddPlayer: SubmitEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const data = parseFormData(formData, {
      username: 'string',
    })

    console.log(data)
  }

  return (
    <div className="cmp-add-players">
      <h1>{text.addPlayer()}</h1>
      <p>{text.description()}</p>
      <form className="add-players-form" onSubmit={handleAddPlayer}>
        <Input
          name="username"
          placeholder={text.addPlayersForm.usernamePlaceholder()}
          variant="paper"
        />
        <Button
          handlingClass="add-players"
          type="secondary"
          title={text.addPlayersForm.buttonTitle()}
        />
      </form>
    </div>
  )
}

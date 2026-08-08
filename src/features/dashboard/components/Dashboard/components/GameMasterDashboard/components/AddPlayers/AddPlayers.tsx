import './AddPlayers.css'
import { Button } from '@/shared/ui/Button/Button'
import { Input } from '@/shared/ui/Input/Input'
import { parseFormData } from '@/shared/utils/formData.util'
import type { SubmitEventHandler } from 'react'
export const AddPlayers = () => {
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
      <h1>Add new player</h1>
      <p>Extend an invitation to a worthy soul to join your campaign.</p>
      <form className="add-players-form" onSubmit={handleAddPlayer}>
        <Input
          name="username"
          placeholder="Enter player name"
          variant="paper"
        />
        <Button
          handlingClass="add-players"
          type="secondary"
          title="Send Invitation"
        />
      </form>
    </div>
  )
}

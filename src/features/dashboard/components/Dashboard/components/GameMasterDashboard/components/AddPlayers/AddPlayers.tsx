import './AddPlayers.css'
import { Button } from '@/shared/ui/Button/Button'
import { Input } from '@/shared/ui/Input/Input'
import { addPlayersText } from './AddPlayers.langs'
import { useText } from '@/features/langs/hooks/useText'
import { Icon } from '@/shared/ui/Icon/Icon'
import { useAddPlayers } from '../../../../hooks'

export const AddPlayers = () => {
  const { handleAddPlayer } = useAddPlayers()
  const text = useText(addPlayersText)

  return (
    <section className="cmp-add-players">
      <span className="corner-tr" />
      <span className="corner-bl" />
      <header className="add-players-heading">
        <span className="add-players-heading-icon">
          <Icon icon="fa-solid fa-user-plus" />
        </span>
        <div>
          <h1>{text.title()}</h1>
          <p>{text.description()}</p>
        </div>
      </header>
      <form className="add-players-form" onSubmit={handleAddPlayer}>
        <div className="add-players-controls">
          <Input
            id="username"
            name="username"
            label={text.usernameLabel()}
            placeholder={text.usernamePlaceholder()}
            theme="paper"
          />
          <Button
            handlingClass="add-players"
            icon="fa-regular fa-envelope"
            theme="primary"
            submit
            loader
            title={text.buttonTitle()}
          />
        </div>
      </form>
      <p className="add-players-note">
        <Icon icon="fa-regular fa-envelope" />
        <span>{text.helperText()}</span>
      </p>
    </section>
  )
}

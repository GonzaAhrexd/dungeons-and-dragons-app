import './CreateCharacter.css'
import { Button } from '@/shared/ui/Button/Button'
import { Icon } from '@/shared/ui/Icon/Icon'
import { useText } from '@/features/langs/hooks/'
import { createCharacterText } from './CreateCharacter.langs'
export const CreateCharacter = () => {
  const text = useText(createCharacterText)

  return (
    <div className="cmp-create-character">
      <div className="add-icon">
        <Icon icon="fa-solid fa-plus" />
      </div>

      <div className="header-group">
        <h2>{text.title()}</h2>
        <p>{text.description()}</p>
      </div>

      <div className="add-actions">
        <Button
          title={text.create()}
          theme="primary"
          handlingClass="btn-create"
        />
      </div>
    </div>
  )
}

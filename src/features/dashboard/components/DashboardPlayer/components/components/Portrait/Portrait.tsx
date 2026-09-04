import './Portrait.css'
import { Link } from 'wouter'
import { Icon } from '@/shared/ui/Icon/Icon'
import { Button } from '@/shared/ui/Button/Button'
import { usePortrait } from './hooks/usePortrait'

interface PortraitProps {
  name: string
  level: number
  characterClass: string
  race: string
  alignment: string
  imageUrl?: string
}

export const Portrait = ({
  name,
  level,
  characterClass,
  race,
  alignment,
  imageUrl = '/tiefling_monk_portrait.jpg',
}: PortraitProps) => {
  const {
    isEditing,
    currentLevel,
    tempLevel,
    levelRef,
    hasChanges,
    toggleEditing,
    handleDecrease,
    handleIncrease,
    handleSave,
  } = usePortrait(level)

  return (
    <div className="cmp-portrait">
      <Link to="/characters" className="edit-btn" title="Editar Personaje">
        <Icon icon="fa-solid fa-pen" />
      </Link>

      <img src={imageUrl} alt={name} />

      <div
        ref={levelRef}
        className={`level-container ${isEditing ? 'expanded' : ''}`}
      >
        <div className="level-display" onClick={toggleEditing}>
          LVL {isEditing ? tempLevel : currentLevel}
        </div>

        <div className="level-actions">
          <Button
            theme="secondary"
            icon="fa-solid fa-arrow-down"
            hideTitle={true}
            handlingClass="level-action-btn"
            onClick={handleDecrease}
            htmlAttrs={{ title: 'Bajar Nivel' }}
          />
          <Button
            theme="secondary"
            icon="fa-solid fa-arrow-up"
            hideTitle={true}
            handlingClass="level-action-btn"
            onClick={handleIncrease}
            htmlAttrs={{ title: 'Subir Nivel' }}
          />
          <Button
            theme="primary"
            icon="fa-solid fa-check"
            hideTitle={true}
            handlingClass={`level-action-btn ${hasChanges ? 'active' : ''}`}
            onClick={handleSave}
            htmlAttrs={{
              disabled: !hasChanges,
              title: 'Guardar Cambios',
            }}
          />
        </div>
      </div>

      <div className="name-overlay">
        <h2>{name}</h2>
        <div className="tags">
          <span>{characterClass}</span>
          <span>{race}</span>
          <span>{alignment}</span>
        </div>
      </div>
    </div>
  )
}


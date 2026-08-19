import { useState } from 'react'
import { Link } from 'wouter'
import { Icon } from '@/shared/ui/Icon/Icon'
import { Button } from '@/shared/ui/Button/Button'
import './Portrait.css'

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
  const [isEditing, setIsEditing] = useState(false)
  const [currentLevel, setCurrentLevel] = useState(level)
  const [tempLevel, setTempLevel] = useState(level)
  const [prevLevel, setPrevLevel] = useState(level)

  if (level !== prevLevel) {
    setPrevLevel(level)
    setCurrentLevel(level)
    setTempLevel(level)
  }

  const hasChanges = tempLevel !== currentLevel

  return (
    <div className="dp-portrait">
      <Link to="/characters" className="dp-edit-btn" title="Editar Personaje">
        <Icon icon="fa-solid fa-pen" />
      </Link>

      <img src={imageUrl} alt={name} />

      <div className={`dp-level-container ${isEditing ? 'dp-expanded' : ''}`}>
        <div
          className="dp-level-display"
          onClick={() => {
            setIsEditing(!isEditing)
            if (!isEditing) {
              setTempLevel(currentLevel)
            }
          }}
        >
          LVL {isEditing ? tempLevel : currentLevel}
        </div>

        <div className="dp-level-actions">
          <Button
            theme="secondary"
            icon="fa-solid fa-arrow-down"
            hideTitle={true}
            handlingClass="dp-level-action-btn"
            onClick={() => setTempLevel(prev => Math.max(1, prev - 1))}
            htmlAttrs={{ title: 'Bajar Nivel' }}
          />
          <Button
            theme="secondary"
            icon="fa-solid fa-arrow-up"
            hideTitle={true}
            handlingClass="dp-level-action-btn"
            onClick={() => setTempLevel(prev => prev + 1)}
            htmlAttrs={{ title: 'Subir Nivel' }}
          />
          <Button
            theme="primary"
            icon="fa-solid fa-check"
            hideTitle={true}
            handlingClass={`dp-level-action-btn ${hasChanges ? 'dp-active' : ''}`}
            onClick={() => {
              setCurrentLevel(tempLevel)
              setIsEditing(false)
            }}
            htmlAttrs={{
              disabled: !hasChanges,
              title: 'Guardar Cambios',
            }}
          />
        </div>
      </div>

      <div className="dp-name-overlay">
        <h2>{name}</h2>
        <div className="dp-tags">
          <span>{characterClass}</span>
          <span>{race}</span>
          <span>{alignment}</span>
        </div>
      </div>
    </div>
  )
}

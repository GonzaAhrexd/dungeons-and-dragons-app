import './Portrait.css'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'wouter'
import { Icon } from '@/shared/ui/Icon/Icon'
import { Button } from '@/shared/ui/Button/Button'

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
  const levelRef = useRef<HTMLDivElement>(null)

  if (level !== prevLevel) {
    setPrevLevel(level)
    setCurrentLevel(level)
    setTempLevel(level)
  }

  useEffect(() => {
    if (!isEditing) return

    const handleClickOutside = (event: MouseEvent) => {
      if (
        levelRef.current &&
        !levelRef.current.contains(event.target as Node)
      ) {
        setIsEditing(false)
        setTempLevel(currentLevel)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isEditing, currentLevel])

  const hasChanges = tempLevel !== currentLevel

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
        <div
          className="level-display"
          onClick={() => {
            setIsEditing(!isEditing)
            if (!isEditing) {
              setTempLevel(currentLevel)
            }
          }}
        >
          LVL {isEditing ? tempLevel : currentLevel}
        </div>

        <div className="level-actions">
          <Button
            theme="secondary"
            icon="fa-solid fa-arrow-down"
            hideTitle={true}
            handlingClass="level-action-btn"
            onClick={() => setTempLevel(prev => Math.max(1, prev - 1))}
            htmlAttrs={{ title: 'Bajar Nivel' }}
          />
          <Button
            theme="secondary"
            icon="fa-solid fa-arrow-up"
            hideTitle={true}
            handlingClass="level-action-btn"
            onClick={() => setTempLevel(prev => prev + 1)}
            htmlAttrs={{ title: 'Subir Nivel' }}
          />
          <Button
            theme="primary"
            icon="fa-solid fa-check"
            hideTitle={true}
            handlingClass={`level-action-btn ${hasChanges ? 'active' : ''}`}
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

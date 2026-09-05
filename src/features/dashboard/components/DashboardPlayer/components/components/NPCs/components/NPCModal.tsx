import { useEffect, useRef } from 'react'
import { Icon } from '@/shared/ui/Icon/Icon'
import { Button } from '@/shared/ui/Button/Button'
import type { NPCItem } from '../interfaces'
import './NPCModal.css'

interface NPCModalProps {
  npc: NPCItem | null
  onClose: () => void
  isPlayer?: boolean
  alignBottom?: boolean
  onViewMore?: () => void
}

export const NPCModal = ({
  npc,
  onClose,
  isPlayer = false,
  alignBottom = false,
  onViewMore,
}: NPCModalProps) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        onClose()
      }
    }

    if (npc) {
      window.addEventListener('keydown', handleKeyDown)
      const timer = setTimeout(() => {
        document.addEventListener('click', handleClickOutside)
      }, 0)

      return () => {
        window.removeEventListener('keydown', handleKeyDown)
        document.removeEventListener('click', handleClickOutside)
        clearTimeout(timer)
      }
    }
  }, [npc, onClose])

  if (!npc) return null

  return (
    <>
      <div
        className="npc-modal-backdrop"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={containerRef}
        className={`npc-modal-container ${alignBottom ? 'align-bottom' : ''}`}
        role="dialog"
        aria-modal="true"
      >
        <button
          type="button"
          className="npc-modal-close"
          onClick={onClose}
          aria-label="Cerrar modal"
        >
          <Icon icon="fa-solid fa-xmark" />
        </button>

        <div className="npc-modal-body">
          {npc.avatarUrl && (
            <div className="npc-modal-avatar">
              <img
                src={npc.avatarUrl}
                alt={npc.name}
                className="npc-modal-avatar-img"
                onError={e => {
                  ;(e.target as HTMLImageElement).style.display = 'none'
                }}
              />
            </div>
          )}
          <h3 className="npc-modal-title">{npc.name}</h3>
          <div className="npc-modal-description">
            <p>{npc.description || 'Sin descripción disponible.'}</p>
          </div>

          {isPlayer && (
            <div className="npc-modal-actions">
              <Button
                title="Ver más"
                theme="primary"
                onClick={onViewMore}
              />
            </div>
          )}
        </div>
      </div>
    </>
  )
}



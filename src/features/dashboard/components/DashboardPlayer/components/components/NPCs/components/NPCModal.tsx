import { useEffect, useRef } from 'react'
import { Icon } from '@/shared/ui/Icon/Icon'
import type { NPCItem } from '@/features/dashboard/components/DashboardPlayer/interfaces'
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
    <div className="cmp-npc-modal">
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

        <div className="npc-modal-header">
          <div className="npc-avatar">
            <img
              src={npc.avatarUrl || '/avatar.png'}
              alt={npc.name}
              className="npc-avatar-img"
              onError={e => {
                ;(e.target as HTMLImageElement).src = '/avatar.png'
              }}
            />
          </div>
          <div>
            <h3>{npc.name}</h3>
            {npc.role && <p className="npc-role">{npc.role}</p>}
          </div>
        </div>

        <div className="npc-modal-body">
          {npc.location && (
            <p>
              <strong>Ubicación:</strong> {npc.location}
            </p>
          )}
          {npc.description && <p>{npc.description}</p>}
          {npc.details && <p>{npc.details}</p>}
        </div>

        {onViewMore && isPlayer && (
          <div className="npc-modal-footer">
            <button
              type="button"
              className="npc-modal-view-more"
              onClick={onViewMore}
            >
              Ver hoja de personaje
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

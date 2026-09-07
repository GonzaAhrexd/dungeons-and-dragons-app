import { useEffect, useRef } from 'react'
import { Icon } from '@/shared/ui/Icon/Icon'
import { Button } from '@/shared/ui/Button/Button'
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
      <div className="backdrop" onClick={onClose} aria-hidden="true" />
      <div
        ref={containerRef}
        className={`container ${alignBottom ? 'align-bottom' : ''}`}
        role="dialog"
        aria-modal="true"
      >
        <button
          type="button"
          className="close"
          onClick={onClose}
          aria-label="Cerrar modal"
        >
          <Icon icon="fa-solid fa-xmark" />
        </button>

        <div className="header">
          <div className="avatar">
            <img
              src={npc.avatarUrl || '/avatar.png'}
              alt={npc.name}
              className="avatar-img"
              onError={e => {
                ;(e.target as HTMLImageElement).src = '/avatar.png'
              }}
            />
          </div>
          <div className="title-group">
            <h3 className="title">{npc.name}</h3>
          </div>
        </div>

        <div className="body">
          {npc.location && <p>{npc.location}</p>}
          {npc.description && <p>{npc.description}</p>}
          {npc.details && <p>{npc.details}</p>}
        </div>

        {onViewMore && isPlayer && (
          <div className="footer">
            <Button
              title="Ver más información"
              onClick={onViewMore}
              theme="primary"
              handlingClass="view-more"
            />
          </div>
        )}
      </div>
    </div>
  )
}

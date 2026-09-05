import { useText } from '@/features/langs/hooks/useText'
import { npcsText } from './NPCs.langs'
import { Icon } from '@/shared/ui/Icon/Icon'
import { NPCModal } from './components/NPCModal'
import { useNPCs } from './hooks/useNPCs'
import type { NPCItem } from './interfaces'
import './NPCs.css'

interface NPCsProps {
  npcs: NPCItem[]
}

export const NPCs = ({ npcs }: NPCsProps) => {
  const text = useText(npcsText)
  const { activeNpc, handleSelectNpc, handleClose, getFullNpcData } = useNPCs()

  return (
    <div className="cmp-npcs">
      <div className="npcs-header">
        <Icon icon="fa-solid fa-user-shield" />
        <span>{text.campaignNPCs()}</span>
      </div>
      <div className="npcs-scroll">
        {npcs.map(npc => {
          const fullNpc = getFullNpcData(npc)
          return (
            <div
              key={npc.name}
              className="npc-item"
              onClick={() => handleSelectNpc(fullNpc)}
              role="button"
              tabIndex={0}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleSelectNpc(fullNpc)
                }
              }}
            >
              <div className="npc-avatar">
                <img
                  src={fullNpc.avatarUrl || '/avatar.png'}
                  alt={fullNpc.name}
                  className="npc-avatar-img"
                  onError={e => {
                    ;(e.target as HTMLImageElement).src = '/avatar.png'
                  }}
                />
              </div>
              <span>{fullNpc.name}</span>
            </div>
          )
        })}
      </div>

      <NPCModal npc={activeNpc} onClose={handleClose} />
    </div>
  )
}

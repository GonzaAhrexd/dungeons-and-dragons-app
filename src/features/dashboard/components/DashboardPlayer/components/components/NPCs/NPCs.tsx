import { useText } from '@/features/langs/hooks/useText'
import { npcsText } from './NPCs.langs'
import { Icon } from '@/shared/ui/Icon/Icon'
import './NPCs.css'

interface NPCItem {
  name: string
  avatarUrl?: string
}

interface NPCsProps {
  npcs: NPCItem[]
}

export const NPCs = ({ npcs }: NPCsProps) => {
  const text = useText(npcsText)

  return (
    <div className="dp-npcs-container">
      <div className="dp-npcs-header">
        <Icon icon="fa-solid fa-user-shield" />
        <span>{text.campaignNPCs()}</span>
      </div>
      <div className="dp-npcs">
        {npcs.map(npc => (
          <div key={npc.name} className="dp-npc">
            <div className="dp-npc-avatar">
              <img
                src={npc.avatarUrl || '/avatar.png'}
                alt={npc.name}
                className="dp-npc-avatar-img"
              />
            </div>
            <span>{npc.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

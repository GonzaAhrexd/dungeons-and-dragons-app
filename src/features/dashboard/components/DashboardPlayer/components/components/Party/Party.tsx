import { useText } from '@/features/langs/hooks/useText'
import { partyText } from './Party.langs'
import { Icon } from '@/shared/ui/Icon/Icon'
import { NPCModal } from '../NPCs/components/NPCModal'
import { useParty } from './hooks/useParty'
import type { PartyMember } from '@/features/dashboard/store/player.store'
import './Party.css'

interface PartyProps {
  partyMembers: PartyMember[]
}

export const Party = ({ partyMembers }: PartyProps) => {
  const text = useText(partyText)
  const { selectedMember, handleSelectMember, handleClose } = useParty()

  return (
    <div className="cmp-party">
      <div className="party-header">
        <Icon icon="fa-solid fa-users" />
        <span>{text.party()}</span>
      </div>
      <div className="party-scroll">
        {partyMembers.map(m => (
          <div
            key={m.name}
            className="party-member"
            onClick={() => handleSelectMember(m)}
            role="button"
            tabIndex={0}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleSelectMember(m)
              }
            }}
          >
            <div className="party-avatar" title={m.name}>
              <img
                src={m.avatarUrl || '/avatar.png'}
                alt={m.name}
                className="party-avatar-img"
                onError={e => {
                  ;(e.target as HTMLImageElement).src = '/avatar.png'
                }}
              />
            </div>
            <span className="party-member-name">{m.name}</span>
          </div>
        ))}
      </div>

      <NPCModal
        npc={selectedMember}
        onClose={handleClose}
        isPlayer={true}
        alignBottom={true}
        onViewMore={() => {
          console.log('Ver más sobre el jugador:', selectedMember?.name)
        }}
      />
    </div>
  )
}


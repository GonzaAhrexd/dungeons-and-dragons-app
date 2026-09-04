import { useText } from '@/features/langs/hooks/useText'
import { partyText } from './Party.langs'
import { Icon } from '@/shared/ui/Icon/Icon'
import './Party.css'

interface PartyMember {
  name: string
  avatarUrl?: string
}

interface PartyProps {
  partyMembers: PartyMember[]
}

export const Party = ({ partyMembers }: PartyProps) => {
  const text = useText(partyText)

  return (
    <div className="cmp-party">
      <div className="party-header">
        <Icon icon="fa-solid fa-users" />
        <span>{text.party()}</span>
      </div>
      <div className="party-scroll">
        {partyMembers.map(m => (
          <div key={m.name} className="party-member">
            <div className="party-avatar" title={m.name}>
              <img
                src={m.avatarUrl || '/avatar.png'}
                alt={m.name}
                className="party-avatar-img"
              />
            </div>
            <span className="party-member-name">{m.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

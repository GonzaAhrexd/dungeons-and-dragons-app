import './PlayerState.css'
import { useText } from '@/features/langs/hooks/useText'
import { playerStateText } from './PlayerState.langs'
interface PlayerStateProps {
  totalMembers: number
  pendingInvitations: number
}

export const PlayerState = ({
  totalMembers,
  pendingInvitations,
}: PlayerStateProps) => {
  const text = useText(playerStateText)

  return (
    <div className="cmp-player-state">
      <h1>{text.playerState()}</h1>
      <h2>{text.totalMembers(totalMembers, { totalMembers })}</h2>
      <h2>
        {text.pendingInvitations(pendingInvitations, { pendingInvitations })}
      </h2>
    </div>
  )
}

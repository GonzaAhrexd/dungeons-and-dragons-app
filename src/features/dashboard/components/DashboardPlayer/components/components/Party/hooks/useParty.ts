import { useState } from 'react'
import type { PartyMember } from '@/features/dashboard/store/player.store'

export const useParty = () => {
  const [selectedMember, setSelectedMember] = useState<PartyMember | null>(
    null
  )

  const handleClose = () => {
    setSelectedMember(null)
  }

  const handleSelectMember = (member: PartyMember) => {
    setSelectedMember(member)
  }

  return {
    selectedMember,
    handleSelectMember,
    handleClose,
  }
}

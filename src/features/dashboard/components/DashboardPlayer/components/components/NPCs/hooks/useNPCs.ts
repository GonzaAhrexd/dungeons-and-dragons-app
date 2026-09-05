import { useState } from 'react'
import { INITIAL_NPCS } from '@/features/dashboard/store/player.store'
import type { NPCItem } from '../interfaces'

export const useNPCs = () => {
  const [selectedNpc, setSelectedNpc] = useState<NPCItem | null>(null)

  const handleClose = () => {
    setSelectedNpc(null)
  }

  const handleSelectNpc = (npc: NPCItem) => {
    setSelectedNpc(getFullNpcData(npc))
  }

  const getFullNpcData = (npc: NPCItem): NPCItem => {
    const initial = INITIAL_NPCS.find(
      item => item.name.toLowerCase() === npc.name.toLowerCase()
    )
    return {
      name: npc.name,
      avatarUrl: npc.avatarUrl || initial?.avatarUrl,
      description: npc.description || initial?.description,
    }
  }

  const activeNpc = selectedNpc ? getFullNpcData(selectedNpc) : null

  return {
    selectedNpc,
    activeNpc,
    handleSelectNpc,
    handleClose,
    getFullNpcData,
  }
}

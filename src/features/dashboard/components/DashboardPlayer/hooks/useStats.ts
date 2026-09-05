import { useState } from 'react'
import type { Attribute } from '../interfaces'

interface UseStatsProps {
  stats: Attribute[]
  onSave?: (stats: Attribute[]) => void
}

export const useStats = ({ stats, onSave }: UseStatsProps) => {
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState<Attribute[]>(stats)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const displayStats = editing ? draft : stats

  const handleStartEdit = () => {
    setDraft(stats.map(s => ({ ...s })))
    setEditing(true)
  }

  const handleCancel = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    setDraft(stats.map(s => ({ ...s })))
    setEditing(false)
    setHoveredIndex(null)
  }

  const handleSave = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    onSave?.(draft)
    setEditing(false)
    setHoveredIndex(null)
  }

  const adjust = (index: number, delta: number, e?: React.MouseEvent) => {
    e?.stopPropagation()
    setDraft(prev =>
      prev.map((s, i) =>
        i === index ? { ...s, value: Math.max(1, s.value + delta) } : s,
      ),
    )
  }

  return {
    editing,
    displayStats,
    hoveredIndex,
    setHoveredIndex,
    handleStartEdit,
    handleCancel,
    handleSave,
    adjust,
  }
}

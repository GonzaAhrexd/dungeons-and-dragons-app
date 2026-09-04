import { useState, useRef, useEffect } from 'react'
import type { VitalBar } from '../../../../interfaces'

interface UseVitalsProps {
  bars: VitalBar[]
  onSave: (updatedBars: VitalBar[]) => void
}

export const useVitals = ({ bars, onSave }: UseVitalsProps) => {
  const [isEditing, setIsEditing] = useState(false)
  const [viewportHeight, setViewportHeight] = useState<number | undefined>(
    undefined,
  )

  const detailsPaneRef = useRef<HTMLDivElement>(null)
  const editPaneRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const activeRef = isEditing ? editPaneRef : detailsPaneRef
    const el = activeRef.current
    if (!el) return

    setViewportHeight(el.scrollHeight)

    const observer = new ResizeObserver(() => {
      setViewportHeight(el.scrollHeight)
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [isEditing, bars])

  const handleStartEdit = () => {
    setIsEditing(true)
  }

  const handleSave = (updatedBars: VitalBar[]) => {
    onSave(updatedBars)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setIsEditing(false)
  }

  return {
    isEditing,
    viewportHeight,
    detailsPaneRef,
    editPaneRef,
    handleStartEdit,
    handleSave,
    handleCancel,
  }
}

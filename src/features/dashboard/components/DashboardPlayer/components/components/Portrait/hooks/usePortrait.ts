import { useEffect, useRef, useState } from 'react'

export const usePortrait = (level: number) => {
  const [isEditing, setIsEditing] = useState(false)
  const [currentLevel, setCurrentLevel] = useState(level)
  const [tempLevel, setTempLevel] = useState(level)
  const [prevLevel, setPrevLevel] = useState(level)
  const levelRef = useRef<HTMLDivElement>(null)

  if (level !== prevLevel) {
    setPrevLevel(level)
    setCurrentLevel(level)
    setTempLevel(level)
  }

  useEffect(() => {
    if (!isEditing) return

    const handleClickOutside = (event: MouseEvent) => {
      if (
        levelRef.current &&
        !levelRef.current.contains(event.target as Node)
      ) {
        setIsEditing(false)
        setTempLevel(currentLevel)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isEditing, currentLevel])

  const toggleEditing = () => {
    setIsEditing(prev => {
      const next = !prev
      if (next) {
        setTempLevel(currentLevel)
      }
      return next
    })
  }

  const handleDecrease = () => setTempLevel(prev => Math.max(1, prev - 1))
  const handleIncrease = () => setTempLevel(prev => prev + 1)
  const handleSave = () => {
    setCurrentLevel(tempLevel)
    setIsEditing(false)
  }

  const hasChanges = tempLevel !== currentLevel

  return {
    isEditing,
    setIsEditing,
    currentLevel,
    tempLevel,
    levelRef,
    hasChanges,
    toggleEditing,
    handleDecrease,
    handleIncrease,
    handleSave,
  }
}

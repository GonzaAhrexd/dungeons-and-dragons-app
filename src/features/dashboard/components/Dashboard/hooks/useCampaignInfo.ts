import { useState, useEffect } from 'react'
import { useGameMasterStore } from '../store/gamemaster.store'
import { formatNextSessionDate, formatElapsedTime } from '@/shared/utils'

export const useCampaignInfo = (customNextSessionDate?: string | Date | null) => {
  const [editMode, setEditMode] = useState(false)
  const [now, setNow] = useState(() => Date.now())
  const storeMock = useGameMasterStore(state => state.mockData)

  const nextSessionDate = customNextSessionDate ?? storeMock.nextSessionDate

  useEffect(() => {
    if (!nextSessionDate) return

    const interval = setInterval(() => {
      setNow(Date.now())
    }, 60000)

    return () => clearInterval(interval)
  }, [nextSessionDate])

  const isInSession = (() => {
    if (!nextSessionDate) return false
    const sessionTime = new Date(nextSessionDate).getTime()
    const twentyFourHoursMs = 24 * 60 * 60 * 1000
    return now >= sessionTime && now <= sessionTime + twentyFourHoursMs
  })()

  const formattedNextSession = formatNextSessionDate(nextSessionDate)
  const elapsedTime = formatElapsedTime(nextSessionDate, now)

  const toggleEditMode = () => setEditMode(prev => !prev)

  return {
    editMode,
    isInSession,
    formattedNextSession,
    elapsedTime,
    toggleEditMode,
    setEditMode,
  }
}


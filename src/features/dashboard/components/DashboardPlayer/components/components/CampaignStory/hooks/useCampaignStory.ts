import { useEffect, useRef, useState } from 'react'

export const useCampaignStory = (collapsedHeight = '5.5rem') => {
  const [expanded, setExpanded] = useState(false)
  const [scrollHeight, setScrollHeight] = useState(0)
  const contentRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = contentRef.current
    if (!el) return
    const observer = new ResizeObserver(() => {
      setScrollHeight(el.scrollHeight)
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!expanded) return

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setExpanded(false)
      }
    }

    const timer = setTimeout(() => {
      document.addEventListener('pointerdown', handleClickOutside)
    }, 0)

    return () => {
      clearTimeout(timer)
      document.removeEventListener('pointerdown', handleClickOutside)
    }
  }, [expanded])

  const toggleExpanded = () => setExpanded(prev => !prev)
  const height = expanded ? `${scrollHeight}px` : collapsedHeight

  return {
    expanded,
    setExpanded,
    toggleExpanded,
    contentRef,
    containerRef,
    height,
  }
}

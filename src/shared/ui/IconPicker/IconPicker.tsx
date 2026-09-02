import { useEffect, useRef, useState } from 'react'
import { Icon } from '../Icon/Icon'
import './IconPicker.css'

export interface IconPickerProps {
  selectedIcon: string
  icons: string[]
  onSelectIcon: (icon: string) => void
  className?: string
}

export const IconPicker = ({
  selectedIcon,
  icons,
  onSelectIcon,
  className = '',
}: IconPickerProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const pickerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = (event: MouseEvent) => {
      if (
        pickerRef.current &&
        !pickerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const handleSelect = (icon: string, e: React.MouseEvent) => {
    e.stopPropagation()
    onSelectIcon(icon)
    setIsOpen(false)
  }

  return (
    <div
      ref={pickerRef}
      className={`cmp-icon-picker ${className} ${isOpen ? 'open' : ''}`}
    >
      <button
        type="button"
        className="icon-picker-trigger"
        onClick={e => {
          e.stopPropagation()
          setIsOpen(prev => !prev)
        }}
        title="Seleccionar icono"
      >
        <Icon icon={selectedIcon || 'fa-solid fa-icons'} />
      </button>

      {isOpen && (
        <div className="icon-picker-popover" onClick={e => e.stopPropagation()}>
          <div className="icon-picker-grid">
            {icons.map(icon => (
              <button
                key={icon}
                type="button"
                className={`icon-picker-option ${selectedIcon === icon ? 'selected' : ''}`}
                onClick={e => handleSelect(icon, e)}
              >
                <Icon icon={icon} />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

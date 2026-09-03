import { useEffect, useRef, useState } from 'react'
import { Icon } from '../Icon/Icon'
import './Select.css'

export interface SelectOption {
  value: string
  label: string
}

export interface SelectProps {
  value: string
  options: SelectOption[]
  onChange: (value: string) => void
  placeholder?: string
  className?: string
  disabled?: boolean
}

export const Select = ({
  value,
  options,
  onChange,
  placeholder = 'Seleccionar',
  className = '',
  disabled = false,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const selectRef = useRef<HTMLDivElement>(null)

  const selectedOption = options.find(opt => opt.value === value)

  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const handleSelect = (val: string, e: React.MouseEvent) => {
    e.stopPropagation()
    onChange(val)
    setIsOpen(false)
  }

  return (
    <div
      ref={selectRef}
      className={`cmp-select ${className} ${isOpen ? 'open' : ''} ${disabled ? 'disabled' : ''}`}
    >
      <button
        type="button"
        className="select-trigger"
        disabled={disabled}
        onClick={e => {
          e.stopPropagation()
          setIsOpen(prev => !prev)
        }}
      >
        <span className="select-value">
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <span className="select-arrow">
          <Icon icon="fa-solid fa-chevron-down" />
        </span>
      </button>

      {isOpen && (
        <div className="select-dropdown" onClick={e => e.stopPropagation()}>
          <div className="select-options-list">
            {options.map(option => (
              <button
                key={option.value}
                type="button"
                className={`select-option ${value === option.value ? 'selected' : ''}`}
                onClick={e => handleSelect(option.value, e)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

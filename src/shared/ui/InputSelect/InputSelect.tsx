import { useEffect, useId, useRef, useState } from 'react'
import type { SelectOption } from '../Select/Select'
import './InputSelect.css'

export interface InputSelectProps {
  id?: string
  name?: string
  label?: string
  value?: string
  options: SelectOption[]
  onChange?: (value: string) => void
  placeholder?: string
  className?: string
  disabled?: boolean
  required?: boolean
  sortAlphabetically?: boolean
}

export const InputSelect = ({
  id,
  name,
  label,
  value,
  options,
  onChange,
  placeholder,
  className,
  disabled = false,
  required = false,
  sortAlphabetically = false,
}: InputSelectProps) => {
  const generatedId = useId()
  const inputId = id || name || generatedId
  const inputName = name || id
  const containerRef = useRef<HTMLDivElement>(null)
  const initialInputValue =
    options.find(option => option.value === value)?.label ?? value ?? ''
  const [internalInputValue, setInternalInputValue] =
    useState(initialInputValue)
  const [isOpen, setIsOpen] = useState(false)
  const [highlightedIndex, setHighlightedIndex] = useState(-1)
  const inputValue =
    value === undefined
      ? internalInputValue
      : (options.find(option => option.value === value)?.label ?? value)

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false)
        setHighlightedIndex(-1)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [])

  const availableOptions = sortAlphabetically
    ? [...options].sort((firstOption, secondOption) =>
        firstOption.label.localeCompare(secondOption.label, undefined, {
          sensitivity: 'base',
        }),
      )
    : options
  const filteredOptions = availableOptions.filter(option =>
    option.label.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase()),
  )

  const selectOption = (option: SelectOption) => {
    if (value === undefined) {
      setInternalInputValue(option.label)
    }
    setIsOpen(false)
    setHighlightedIndex(-1)
    onChange?.(option.value)
  }

  const handleInputChange = (nextValue: string) => {
    if (value === undefined) {
      setInternalInputValue(nextValue)
    }
    setIsOpen(true)
    setHighlightedIndex(-1)
    onChange?.(nextValue)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setIsOpen(true)
      setHighlightedIndex(current =>
        Math.min(current + 1, filteredOptions.length - 1),
      )
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault()
      setHighlightedIndex(current => Math.max(current - 1, 0))
    }

    if (event.key === 'Enter' && highlightedIndex >= 0) {
      event.preventDefault()
      selectOption(filteredOptions[highlightedIndex])
    }

    if (event.key === 'Escape') {
      setIsOpen(false)
      setHighlightedIndex(-1)
    }
  }

  return (
    <div
      ref={containerRef}
      className={`cmp-input-select ${className} ${disabled ? 'disabled' : ''}`}
    >
      {label && <label htmlFor={inputId}>{label}</label>}
      <div className="input-select-wrapper">
        <input
          id={inputId}
          name={inputName}
          value={inputValue}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          role="combobox"
          aria-expanded={isOpen}
          aria-controls={`${inputId}-options`}
          aria-autocomplete="list"
          onFocus={() => setIsOpen(true)}
          onChange={event => handleInputChange(event.target.value)}
          onKeyDown={handleKeyDown}
        />
        {isOpen && filteredOptions.length > 0 && (
          <ul id={`${inputId}-options`} role="listbox">
            {filteredOptions.map((option, index) => (
              <li
                key={option.value}
                role="option"
                aria-selected={index === highlightedIndex}
                className={index === highlightedIndex ? 'highlighted' : ''}
                onMouseDown={event => event.preventDefault()}
                onClick={() => selectOption(option)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

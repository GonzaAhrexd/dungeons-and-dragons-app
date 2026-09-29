import './SwitchButton.css'
import { useState, useEffect, useRef } from 'react'

interface SwitchButtonProps {
  checked?: boolean
  onChange?: (checked: boolean) => void
  disabled?: boolean
}

export function SwitchButton({
  checked,
  onChange,
  disabled,
}: SwitchButtonProps) {
  const [isChecked, setIsChecked] = useState(checked ?? false)
  const isInitialized = useRef(false)

  useEffect(() => {
    if (!isInitialized.current && checked !== undefined) {
      setIsChecked(checked)
      isInitialized.current = true
    }
  }, [checked])

  const toggle = () => {
    if (disabled) return
    const next = !isChecked
    setIsChecked(next)
    onChange?.(next)
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isChecked}
      disabled={disabled}
      onClick={toggle}
      className={`cmp-switch-button ${isChecked ? 'checked' : ''}`}
    >
      <span className="cmp-switch-button__thumb" />
    </button>
  )
}

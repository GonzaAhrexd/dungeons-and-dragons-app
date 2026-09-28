import { useState } from 'react'
import './SwitchButton.css'

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
  const [internal, setInternal] = useState(false)
  const isChecked = checked ?? internal

  const toggle = () => {
    if (disabled) return
    const next = !isChecked
    setInternal(next)
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

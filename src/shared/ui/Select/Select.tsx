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
  return (
    <div className={`cmp-select ${className} ${disabled ? 'disabled' : ''}`}>
      <select
        className="select-native"
        value={value}
        disabled={disabled}
        onChange={e => onChange(e.target.value)}
      >
        {!options.find(o => o.value === value) && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

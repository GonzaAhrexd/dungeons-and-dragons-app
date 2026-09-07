import { useState } from 'react'
import './Input.css'
import { Button } from '../Button/Button'

type Types = 'text' | 'password' | 'email'
interface InputProps {
  id?: string
  name: string
  label?: string
  placeholder?: string
  type?: Types
  defaultValue?: string
  autoComplete?: string
  theme?: 'gold' | 'paper'
  handlingClass?: string
  htmlAttrs?: React.InputHTMLAttributes<HTMLInputElement>
}

export const Input = ({
  id,
  name,
  label,
  placeholder,
  type = 'text',
  defaultValue,
  autoComplete,
  theme = 'gold',
  handlingClass,
  htmlAttrs,
}: InputProps) => {
  const [isShowPassword, setIsShowPassword] = useState(false)

  const handlePasswordVisibility = () => {
    setIsShowPassword(!isShowPassword)
  }

  const changeVisibility = (type: Types) => {
    if (type === 'text') return type
    if (type === 'password') return isShowPassword ? 'text' : 'password'
  }

  const inputId = id || htmlAttrs?.id || name
  const inputName = name || htmlAttrs?.name || inputId
  const inputAutoComplete = autoComplete || htmlAttrs?.autoComplete

  return (
    <div className={`cmp-input ${theme} ${handlingClass}`}>
      {label && <p>{label}</p>}
      <div className="input-wrapper">
        <input
          {...{
            id: inputId,
            name: inputName,
            placeholder,
            type: changeVisibility(type),
            defaultValue,
            autoComplete: inputAutoComplete,
            ...htmlAttrs,
          }}
        />
        {type === 'password' && (
          <Button
            icon={`fa-solid ${isShowPassword ? 'fa-eye' : 'fa-eye-slash'}`}
            theme="secondary"
            onClick={handlePasswordVisibility}
            htmlAttrs={{
              type: 'button',
            }}
          />
        )}
      </div>
    </div>
  )
}

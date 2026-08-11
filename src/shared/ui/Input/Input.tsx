import { useState } from 'react'
import './Input.css'
import { Button } from '../Button/Button'

type Types = 'text' | 'password' | 'email'
interface InputProps {
  name: string
  label?: string
  placeholder?: string
  type?: Types
  defaultValue?: string
  variant?: 'gold' | 'paper'
  handlingClass?: string
  htmlAttrs?: React.InputHTMLAttributes<HTMLInputElement>
}

export const Input = ({
  name,
  label,
  placeholder,
  type = 'text',
  defaultValue,
  variant = 'gold',
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

  return (
    <div className={`cmp-input ${variant} ${handlingClass}`}>
      {label && <p>{label}</p>}
      <div className="input-wrapper">
        <input
          {...{
            name,
            placeholder,
            type: changeVisibility(type),
            defaultValue,
            ...htmlAttrs,
          }}
        />
        {type === 'password' && (
          <Button
            icon={`fa-solid ${isShowPassword ? 'fa-eye' : 'fa-eye-slash'}`}
            type="secondary"

            title="Show Password"
            htmlAttrs={{
              type: 'button',
              onClick: handlePasswordVisibility }}
          />

        )}
      </div>
    </div>
  )
}

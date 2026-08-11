import './Button.css'
import { useState } from 'react'
import type { ButtonHTMLAttributes, MouseEvent } from 'react'
import { Icon } from '../Icon/Icon'
export interface ButtonProps {
  title?: string
  icon?: string
  hideTitle?: boolean
  column?: boolean
  submit?: boolean
  theme?: 'primary' | 'secondary'
  loader?: boolean
  handlingClass?: string
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  htmlAttrs?: ButtonHTMLAttributes<HTMLButtonElement>
}

export const Button = ({
  title,
  icon,
  hideTitle = false,
  column = false,
  submit = false,
  theme = 'primary',
  loader = false,
  handlingClass = '',
  htmlAttrs,
  onClick,
}: ButtonProps) => {
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if ((htmlAttrs?.type === 'submit' || submit) && loader) {
      e.preventDefault()

      const form = e.currentTarget.form
      setIsLoading(true)

      setTimeout(() => {
        setIsLoading(false)
        form?.requestSubmit()
      }, 1000)
    }

    htmlAttrs?.onClick?.(e)
  }

  return (
    <button
      className={`cmp-button ${handlingClass} ${theme} ${column && 'col'}`}
      onClick={onClick ? onClick : handleClick}
      disabled={isLoading || htmlAttrs?.disabled}
      type={submit ? 'submit' : 'button'}
      {...htmlAttrs}
    >
      {isLoading ? (
        <span className="spinner" />
      ) : icon ? (
        <>
          <Icon icon={icon} /> {hideTitle ? null : <p>{title}</p>}
        </>
      ) : (
        title
      )}
    </button>
  )
}

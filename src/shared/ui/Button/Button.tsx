import './Button.css'
import { useState } from 'react'
import type { ButtonHTMLAttributes, MouseEvent } from 'react'

interface ButtonProps {
  title: string
  type?: 'primary' | 'secondary'
  variant?: 'gold' | 'gold-outline'
  loader?: boolean
  htmlAttrs?: ButtonHTMLAttributes<HTMLButtonElement>
  handlingClass?: string
}

export const Button = ({
  title,
  type = 'primary',
  variant,
  loader = false,
  handlingClass,
  htmlAttrs,
}: ButtonProps) => {
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (htmlAttrs?.type === 'submit' && loader) {
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
      className={`cmp-button ${handlingClass} ${type} ${variant}`}
      {...htmlAttrs}
      onClick={handleClick}
      disabled={isLoading || htmlAttrs?.disabled}
    >
      {isLoading ? <span className="spinner" /> : title}
    </button>
  )
}

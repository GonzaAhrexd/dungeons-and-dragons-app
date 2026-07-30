import './Button.css'
import type { ButtonHTMLAttributes } from 'react'

interface ButtonProps {
  title: string
  htmlAttrs?: ButtonHTMLAttributes<HTMLButtonElement>
}
export const Button = ({ title, htmlAttrs }: ButtonProps) => {
  return (
    <button className="cmp-button" {...htmlAttrs}>
      {title}
    </button>
  )
}

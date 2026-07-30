import type { ReactNode } from 'react'
import './Board.css'
interface BoardProps {
  children: ReactNode
  className?: string
}
export const Board = ({ children, className }: BoardProps) => {
  return <div className={`cmp-board ${className || ''}`}>{children}</div>
}

import './Badge.css'

interface BadgeProps {
  text: string
  color?: 'gold' | 'gray' | 'red' | 'custom'
}

export const Badge = ({ text, color = 'gold' }: BadgeProps) => {
  return <div className={`cmp-badge ${color}`}>{text}</div>
}

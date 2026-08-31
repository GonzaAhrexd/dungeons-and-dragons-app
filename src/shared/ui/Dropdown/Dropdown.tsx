import './Dropdown.css'
import { useId, type ReactNode, type RefObject } from 'react'

interface DropdownProps {
  ref?: RefObject<HTMLDivElement | null>
  opener: (popoverTarget: string) => ReactNode
  children: ReactNode | ReactNode[]
}

export const Dropdown = ({ ref, opener, children }: DropdownProps) => {
  const id = useId()

  return (
    <>
      {opener(id)}
      <div className="cmp-dropdown" popover="auto" {...{ ref, id }}>
        {children}
      </div>
    </>
  )
}

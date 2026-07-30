import './Icon.css'

interface IconProps {
  icon: string
}
export const Icon = ({ icon }: IconProps) => {
  return <i className={'cmp-icon ' + icon}></i>
}

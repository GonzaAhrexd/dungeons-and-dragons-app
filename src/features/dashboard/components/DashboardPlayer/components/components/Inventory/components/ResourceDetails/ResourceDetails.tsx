import { useText } from '@/features/langs/hooks/useText'
import { inventoryText } from '../../Inventory.langs'
import { Icon } from '@/shared/ui/Icon/Icon'
import type { ResourceDetailsProps } from '@/features/dashboard/components/DashboardPlayer/interfaces'
import './ResourceDetails.css'

export const ResourceDetails = ({
  icon,
  label,
  value,
  onClick,
}: ResourceDetailsProps) => {
  const text = useText(inventoryText)

  return (
    <div
      className="cmp-resource-details"
      onClick={onClick}
      title={text.editResource()}
    >
      <div className="resource-icon">
        <Icon icon={icon} />
      </div>
      <div className="resource-info">
        <span className="resource-label">{label}</span>
        <span className="resource-value">{value}</span>
      </div>
    </div>
  )
}

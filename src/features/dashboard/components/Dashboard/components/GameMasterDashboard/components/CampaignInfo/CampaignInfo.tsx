import { Button } from '@/shared/ui/Button/Button'
import './CampaignInfo.css'
import { useState } from 'react'
interface CampaignInfoProps {
  title: string
  description: string
}
export const CampaignInfo = ({ title, description }: CampaignInfoProps) => {
  const [editMode, setEditMode] = useState(false)

  const handleEditMode = () => {
    setEditMode(!editMode)
  }

  return (
    <div className="cmp-campaign-info">
      <Button
        theme="secondary"
        icon="fa-solid fa-pencil"
        handlingClass="edit-button"
        onClick={handleEditMode}
      />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

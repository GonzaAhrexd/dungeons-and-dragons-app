import { Button } from '@/shared/ui/Button/Button'
import './CampaignInfo.css'
import { useState, type SubmitEventHandler } from 'react'
import { Input } from '@/shared/ui/Input/Input'
import { TextArea } from '@/shared/ui/TextArea/TextArea'
import { useEditCampaign } from '@/features/campaigns/hooks/useEditCampaign'
import { useCampaignStore } from '@/features/campaigns/store/campaign.store'
import { parseFormData } from '@/shared/utils'
interface CampaignInfoProps {
  title: string
  description: string
}
export const CampaignInfo = ({ title, description }: CampaignInfoProps) => {
  const [editMode, setEditMode] = useState(false)
  const campaignId = useCampaignStore(state => state.currentCampaignId)

  const { mutateAsync: editCampaign } = useEditCampaign()
  const handleEditMode = () => {
    setEditMode(!editMode)
  }

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = async e => {
    e.preventDefault()

    if (!campaignId) {
      console.error('No campaign ID found')
      return
    }

    const formData = new FormData(e.currentTarget)

    const data = parseFormData(formData, {
      name: 'string',
      description: 'string',
    })

    await editCampaign({
      params: { id: campaignId },
      data,
    })

    setEditMode(false)
  }

  return (
    <div className="cmp-campaign-info">
      <div className="edit-state-button">
        <Button
          theme="secondary"
          icon={`fa-solid ${editMode ? 'fa-x' : 'fa-pencil'}`}
          handlingClass={`edit-button`}
          onClick={handleEditMode}
        />
      </div>
      <div className={`info-display ${!editMode ? 'active' : ''}`}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <form
        className={`edit-form ${editMode ? 'active' : ''}`}
        onSubmit={handleSubmit}
      >
        <Input name="name" label="Title" defaultValue={title} />
        <TextArea
          name="description"
          label="Description"
          defaultValue={description}
        />

        <Button title="Save" theme="primary" submit loader />
      </form>
    </div>
  )
}

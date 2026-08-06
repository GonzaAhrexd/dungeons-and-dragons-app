import { Input } from '@/shared/ui/Input/Input'
import './CampaignAddForm.css'
import { Button } from '@/shared/ui/Button/Button'
import { useText } from '@/features/langs/hooks/useText'
import { campaignAddFormText } from './CampaignAddForm.langs'
import { TextArea } from '@/shared/ui/TextArea/TextArea'
import type { SubmitEventHandler } from 'react'
import { parseFormData } from '@/shared/utils/formData.util'
import { useCreateCampaign } from '@/features/campaigns/hooks'
import { useAuthStore } from '@/features/auth/store/auth.store'

export const CampaignAddForm = () => {
  const text = useText(campaignAddFormText)
  const user = useAuthStore(state => state.user)

  const { mutateAsync: createCampaign } = useCreateCampaign()
  const handleCreateCampaign: SubmitEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const data = parseFormData(formData, {
      name: 'string',
      description: 'string',
    })

    createCampaign({
      ...data,
      gamemaster: user?.id || '',
    })
  }

  return (
    <div className="cmp-campaign-add-form">
      <div className="header-group">
        <h1>{text.addCampaign()}</h1>
        <p>{text.addCampaignDescription()}</p>
      </div>
      <form onSubmit={handleCreateCampaign}>
        <Input label={text.nameLabel()} name="name" />
        <TextArea label={text.descriptionLabel()} name="description" />

        <Button
          title={text.confirm()}
          handlingClass="btn-create"
          htmlAttrs={{ type: 'submit' }}
        />
      </form>
    </div>
  )
}

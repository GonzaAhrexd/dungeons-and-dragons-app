import { Input } from '@/shared/ui/Input/Input'
import './CampaignAddForm.css'
import { Button } from '@/shared/ui/Button/Button'
import { useText } from '@/features/langs/hooks/useText'
import { campaignAddFormText } from './CampaignAddForm.langs'
import { TextArea } from '@/shared/ui/TextArea/TextArea'
import { useCreateCampaign } from '@/features/campaigns/hooks'
import { useAuthStore } from '@/features/auth/store/auth.store'

export const CampaignAddForm = () => {
  const text = useText(campaignAddFormText)
  const user = useAuthStore(state => state.user)

  const { mutateAsync: createCampaign } = useCreateCampaign()


  const handleCreateCampaign = async (formData: FormData) => {
    const data = {
      name: formData.get('name') as string,
      description: formData.get('description') as string,
    }

    await createCampaign({
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
      <form action={handleCreateCampaign}>
        <Input
          id="campaign-name"
          label={text.nameLabel()}
          name="name"
          autoComplete="off"
        />
        <TextArea
          id="campaign-description"
          label={text.descriptionLabel()}
          name="description"
        />

        <Button title={text.confirm()} handlingClass="btn-create" submit />
      </form>
    </div>
  )
}

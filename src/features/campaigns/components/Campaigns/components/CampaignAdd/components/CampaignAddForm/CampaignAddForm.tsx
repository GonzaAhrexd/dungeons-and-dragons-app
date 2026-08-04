import { Input } from '@/shared/ui/Input/Input'
import './CampaignAddForm.css'
import { Button } from '@/shared/ui/Button/Button'
import { useText } from '@/features/langs/hooks/useText'
import { campaignAddFormText } from './CampaignAddForm.langs'
import { TextArea } from '@/shared/ui/TextArea/TextArea'

export const CampaignAddForm = () => {
  const text = useText(campaignAddFormText)

  return (
    <div className="cmp-campaign-add-form">
      <h1>{text.addCampaign()}</h1>
      <p>{text.addCampaignDescription()}</p>
      <form action="">
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

import { Input } from '@/shared/ui/Input/Input'
import './CampaignJoin.css'
import { Button } from '@/shared/ui/Button/Button'
import { useText } from '@/features/langs/hooks/useText'
import { campaignJoinText } from './CampaignJoin.langs'

export const CampaignJoin = () => {
  const text = useText(campaignJoinText)

  const handleJoinCampaign = async (formData: FormData) => {
    const code = formData.get('code') as string
    // Placeholder for future join campaign mutate hook call
    console.log('Joining campaign with code:', code)
  }

  return (
    <div className="cmp-campaign-join">
      <div className="header-group">
        <h1>{text.joinCampaign()}</h1>
        <p>{text.joinCampaignDescription()}</p>
      </div>
      <form action={handleJoinCampaign}>
        <Input
          id="campaign-join-code"
          label={text.codeLabel()}
          name="code"
          autoComplete="off"
        />

        <Button title={text.confirm()} handlingClass="btn-create" submit />
      </form>
    </div>
  )
}

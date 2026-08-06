import { Input } from '@/shared/ui/Input/Input'
import './CampaignJoin.css'
import { Button } from '@/shared/ui/Button/Button'
import { useText } from '@/features/langs/hooks/useText'
import { campaignJoinText } from './CampaignJoin.langs'
import type { SubmitEventHandler } from 'react'
import { parseFormData } from '@/shared/utils/formData.util'

export const CampaignJoin = () => {
  const text = useText(campaignJoinText)

  const handleJoinCampaign: SubmitEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const data = parseFormData(formData, {
      code: 'string',
    })

    console.log('Joining campaign with code:', data.code)
    // Placeholder for future join campaign mutate hook call
  }

  return (
    <div className="cmp-campaign-join">
      <h1>{text.joinCampaign()}</h1>
      <p>{text.joinCampaignDescription()}</p>
      <form onSubmit={handleJoinCampaign}>
        <Input label={text.codeLabel()} name="code" />

        <Button
          title={text.confirm()}
          handlingClass="btn-create"
          htmlAttrs={{ type: 'submit' }}
        />
      </form>
    </div>
  )
}

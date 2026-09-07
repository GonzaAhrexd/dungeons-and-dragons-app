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

  const campaignMockData = {
    status: 'EN CAMPANA',
    act: 'ACTO I',
    level: 'NIVEL 3',
    tier: 'Tier de Aventurero Heroico',
    players: '3 / 6',
    session: '#04',
    nextSession: 'Viernes, 20:00 h',
  }

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
      <div className={`info-display ${!editMode ? 'active' : ''}`}>
        <div className="campaign-heading">
          <div className="campaign-kicker">
            <span className="campaign-status">
              <span className="status-dot" />
              {campaignMockData.status}
            </span>
            <span>{campaignMockData.act}</span>
            <span>•</span>
            <span>{campaignMockData.level}</span>
            <span>•</span>
            <span>{campaignMockData.tier}</span>
          </div>
          <div className="campaign-title-row">
            <h1>{title || 'CAMPAÑA NUEVA'}</h1>
            <Button
              theme="secondary"
              icon="fa-solid fa-pencil"
              handlingClass="edit-button"
              onClick={handleEditMode}
            />
          </div>
          <p>
            {description ||
              'Las sombras se alargan sobre la vieja taberna de Phandalin.'}
          </p>
        </div>
        <div className="campaign-stats">
          <div className="campaign-stat">
            <span>JUGADORES</span>
            <strong>{campaignMockData.players}</strong>
          </div>
          <div className="campaign-stat">
            <span>SESIÓN</span>
            <strong>{campaignMockData.session}</strong>
          </div>
          <div className="campaign-stat campaign-stat-next">
            <span>PRÓXIMA CITA</span>
            <strong>{campaignMockData.nextSession}</strong>
          </div>
        </div>
      </div>
      <form
        className={`edit-form ${editMode ? 'active' : ''}`}
        onSubmit={handleSubmit}
      >
        <div className="edit-form-heading">
          <div>
            <span className="form-eyebrow">EDITAR CAMPAÑA</span>
            <h2>Datos de la campaña</h2>
          </div>
          <Button
            theme="secondary"
            icon="fa-solid fa-x"
            handlingClass="edit-button"
            onClick={handleEditMode}
          />
        </div>
        <Input name="name" label="Título" defaultValue={title} />
        <TextArea
          name="description"
          label="Descripción"
          defaultValue={description}
        />

        <Button title="Guardar cambios" theme="primary" submit loader />
      </form>
    </div>
  )
}

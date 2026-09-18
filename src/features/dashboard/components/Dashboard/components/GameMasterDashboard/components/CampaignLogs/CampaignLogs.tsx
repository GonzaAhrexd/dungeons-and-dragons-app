import './CampaignLogs.css'
import { Icon } from '@/shared/ui/Icon/Icon'
import { useText } from '@/features/langs/hooks/useText'
import { campaignLogsText } from './CampaignLogs.langs'
import type { CampaignLogItem } from './interface'

export interface CampaignLogsProps {
  logs?: CampaignLogItem[]
  onAddManualLog?: () => void
  onViewAll?: () => void
}
// TODO: Revisar todo este componente cuando se implementen los logs
export const CampaignLogs = ({
  logs = [],
  onAddManualLog,
}: CampaignLogsProps) => {
  const text = useText(campaignLogsText)
  const INITIAL_MOCK_LOGS: CampaignLogItem[] = [
    {
      id: 'log1',
      time: '18:42',
      type: 'saving_throw',
      tagLabel: 'SALVACIÓN',
      actor: 'TEST123',
      actionText: 'lanzó salvación de Sabiduría:',
      highlightText: '¡Éxito! (18)',
      formula: 'Fórmula: 1d20 [15] + 3 Bono = 18',
    },
    {
      id: 'log2',
      time: '18:30',
      type: 'narrative',
      tagLabel: 'NARRATIVA',
      actor: 'DM',
      actionText: 'añadió una nueva pista al códice:',
      description: '"La Llave de Hueso del Templo Olvidado".',
    },
    {
      id: 'log3',
      time: '18:15',
      type: 'spell',
      tagLabel: 'CONJURO',
      actor: 'ELANOR_SOMBRA',
      actionText: 'canalizó',
      spellName: 'Proyectil Mágico',
      description: '(Nv. 1). Daño infligido:',
      highlightText: '11 de Fuerza.',
    },
    {
      id: 'log4',
      time: '18:02',
      type: 'initiative',
      tagLabel: 'INICIATIVA',
      actionText: 'Se inició el combate:',
      highlightText: 'Ronda 1 contra 4 Goblins del Bosque.',
    },
    {
      id: 'log5',
      time: '18:02',
      type: 'initiative',
      tagLabel: 'INICIATIVA',
      actionText: 'Se inició el combate:',
      highlightText: 'Ronda 1 contra 4 Goblins del Bosque.',
    },
    {
      id: 'log6',
      time: '18:02',
      type: 'initiative',
      tagLabel: 'INICIATIVA',
      actionText: 'Se inició el combate:',
      highlightText: 'Ronda 1 contra 4 Goblins del Bosque.',
    },

    {
      id: 'log7',
      time: '18:02',
      type: 'initiative',
      tagLabel: 'INICIATIVA',
      actionText: 'Se inició el combate:',
      highlightText: 'Ronda 1 contra 4 Goblins del Bosque.',
    },
  ]

  const getTagClass = (type: string) => {
    switch (type) {
      case 'saving_throw':
      case 'roll':
        return 'tag-green'
      case 'narrative':
      case 'lore':
        return 'tag-amber'
      case 'spell':
        return 'tag-purple'
      case 'initiative':
      case 'combat':
      default:
        return 'tag-slate'
    }
  }

  return (
    <div className="cmp-campaign-logs">
      {/* Header */}
      <div className="label">
        <div className="label-title">
          <Icon icon="fa-solid fa-file-lines" />
          <h1>{text.campaignLogs()}</h1>
        </div>
      </div>

      {/* Scrollable Logs Items */}
      <div className="logs-scroll-area">
        {logs.length === 0 && (
          <div className="no-logs-message">
            <p>No logs available</p>
          </div>
        )}
        {INITIAL_MOCK_LOGS.map(log => (
          <div className="log-card" key={log.id}>
            <div className="log-header">
              <span className="log-time">{log.time}</span>
              <span className={`log-tag ${getTagClass(log.type)}`}>
                {log.tagLabel}
              </span>
            </div>
            <div className="log-body">
              <p className="log-main-text">
                {log.actor && (
                  <strong className="log-actor">{log.actor} </strong>
                )}
                {log.actionText && <span>{log.actionText} </span>}
                {log.spellName && (
                  <strong className="log-spell">{log.spellName} </strong>
                )}
                {log.description && (
                  <em className="log-description">{log.description} </em>
                )}
                {log.highlightText && (
                  <strong className={`log-highlight ${getTagClass(log.type)}`}>
                    {log.highlightText}
                  </strong>
                )}
              </p>
              {log.formula && <p className="log-formula">{log.formula}</p>}
            </div>
          </div>
        ))}
      </div>

      {/* Add Manual Log Button */}
      <button type="button" className="add-log-btn" onClick={onAddManualLog}>
        <Icon icon="fa-solid fa-plus" />
        <span>{text.addManualLog()}</span>
      </button>
    </div>
  )
}

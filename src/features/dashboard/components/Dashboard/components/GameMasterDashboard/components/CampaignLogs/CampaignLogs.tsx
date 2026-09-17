import { useMemo } from 'react'
import './CampaignLogs.css'
import { Icon } from '@/shared/ui/Icon/Icon'
import { useText } from '@/features/langs/hooks/useText'
import { campaignLogsText } from './CampaignLogs.langs'
import { useGameMasterStore } from '@/features/dashboard/components/Dashboard/store/gamemaster.store'
import type { CampaignLogsProps } from '../../../../interfaces'

export const CampaignLogs = ({
  logs,
  onAddManualLog,
}: CampaignLogsProps) => {
  const text = useText(campaignLogsText)
  const mockData = useGameMasterStore(state => state.mockData)

  const effectiveLogs = useMemo(() => {
    return logs && logs.length > 0 ? logs : mockData.logs
  }, [logs, mockData.logs])

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
        {effectiveLogs.map(log => (
          <div className="log-card" key={log.id}>
            <div className="log-header">
              <span className="log-time">{log.time}</span>
              <span className={`log-tag ${getTagClass(log.type)}`}>
                {log.tagLabel}
              </span>
            </div>
            <div className="log-body">
              <p className="log-main-text">
                {log.actor && <strong className="log-actor">{log.actor} </strong>}
                {log.actionText && <span>{log.actionText} </span>}
                {log.spellName && <strong className="log-spell">{log.spellName} </strong>}
                {log.description && <em className="log-description">{log.description} </em>}
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
      <button
        type="button"
        className="add-log-btn"
        onClick={onAddManualLog}
      >
        <Icon icon="fa-solid fa-plus" />
        <span>{text.addManualLog()}</span>
      </button>
    </div>
  )
}

import { Button } from '@/shared/ui/Button/Button'
import { Icon } from '@/shared/ui/Icon/Icon'
import './CampaignError.css'

interface CampaignErrorProps {
  errorMessage: string
  errorDescription?: string
  retryText?: string
  onRetry?: () => void
}

export const CampaignError = ({
  errorMessage,
  errorDescription,
  retryText = 'Reintentar',
  onRetry,
}: CampaignErrorProps) => {
  return (
    <div className="cmp-campaigns cmp-campaign-error">
      <div className="error-card">
        <div className="error-icon">
          <Icon icon="fa-solid fa-triangle-exclamation" />
        </div>
        <h2 className="error-title">{errorMessage}</h2>
        {errorDescription && <p className="error-desc">{errorDescription}</p>}
        {onRetry && (
          <Button
            title={retryText}
            icon="fa-solid fa-rotate-right"
            onClick={onRetry}
            theme="primary"
            handlingClass="error-retry-btn"
          />
        )}
      </div>
    </div>
  )
}

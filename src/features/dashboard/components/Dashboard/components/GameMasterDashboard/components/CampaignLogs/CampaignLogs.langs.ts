import type { LanguagesText } from '@/features/langs/interfaces'

interface CampaignLogsText {
  campaignLogs: string
  viewAll: string
  addManualLog: string
}

export const campaignLogsText: LanguagesText<CampaignLogsText> = {
  en: {
    campaignLogs: 'Campaign Logs',
    viewAll: 'VIEW ALL',
    addManualLog: 'ADD MANUAL LOG',
  },
  es: {
    campaignLogs: 'Registros de Campaña',
    viewAll: 'VER TODOS',
    addManualLog: 'AÑADIR REGISTRO MANUAL',
  },
}

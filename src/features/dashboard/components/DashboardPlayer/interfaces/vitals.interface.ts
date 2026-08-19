export interface VitalBar {
  id: string
  label: string
  current: number
  max: number
  color: 'red' | 'gold' | 'green' | 'blue' | 'purple' | 'orange'
}

import { SwitchButton } from '@/shared/ui/SwitchButton/SwitchButton'
import './SettingsSection.css'
import { Button } from '@/shared/ui/Button/Button'
export const SettingsSection = () => {
  return (
    <div className="cmp-settings-section">
      <h1>Settings</h1>
      <div className="content">
        <div className="items">
          <p>Active campaign </p>
          <SwitchButton />
        </div>
        <Button title="Delete campaign" theme="secondary" />
      </div>
    </div>
  )
}

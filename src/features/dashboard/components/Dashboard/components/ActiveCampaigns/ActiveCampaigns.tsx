import './ActiveCampaigns.css'
import { Icon } from '@/shared/ui/Icon/Icon'
import { Board } from '../../../Board/Board'
export const ActiveCampaigns = () => {
  return (
    <Board className="cmp-active-campaigns">
      <div className="title">
        <Icon icon="fa-solid fa-compass" />
        <p>Active Campaigns</p>
      </div>

      <div className="campaigns">
        <div className="campaign">
          <p>Campaign 1</p>
        </div>
        <div className="campaign">
          <p>Campaign 2</p>
        </div>
        <div className="campaign">
          <p>Campaign 3</p>
        </div>
      </div>
    </Board>
  )
}

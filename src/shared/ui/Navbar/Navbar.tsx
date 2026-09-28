import './Navbar.css'
import { useAuthStore } from '@/features/auth/store/auth.store'
import { Link, useLocation } from 'wouter'
import { homeText } from './Navbar.langs'
import { useText } from '@/features/langs/hooks/useText'
import { Icon } from '../Icon/Icon'
import { useCampaignStore } from '@/features/campaigns/store/campaign.store'
import { Blobatar } from '@blobatar/react'
import { Dropdown } from '../Dropdown/Dropdown'
import { CampaignInvitations } from './components'
import { Button } from '../Button/Button'

export const Navbar = () => {
  const text = useText(homeText)

  const user = useAuthStore(state => state.user)
  const campaignId = useCampaignStore(state => state.currentCampaignId)
  const logout = useAuthStore(state => state.logout)
  const resetCampaignId = useCampaignStore(state => state.reset)

  const [location] = useLocation()

  const NAV_LINKS = [
    {
      label: text.campaigns(),
      href: '/campaigns',
      icon: 'fa-solid fa-chess-rook',
    },
    {
      label: text.dashboard(),
      href: '/dashboard',
      icon: 'fa-solid fa-table-cells-large',
    },
    // {
    //   label: 'DashBoard 2',
    //   href: '/dashboardplayer',
    //   icon: 'fa-solid fa-chess-knight',
    // },
    {
      label: text.mycharacters(),
      href: '/characters',
      icon: 'fa-solid fa-book-open',
    },
  ]

  const navLinks = NAV_LINKS.filter(
    ({ href }) => href !== '/dashboard' || campaignId,
  ).map(({ label, href, icon }) => (
    <Link
      key={href}
      to={href}
      className={`link ${location === href ? 'is-active' : ''}`}
    >
      <Icon icon={icon} />
      <span>{label}</span>
    </Link>
  ))

  const handleLogout = () => {
    logout()
    resetCampaignId()
  }

  return (
    <nav className="cmp-navbar">
      <Link to="/dashboard" className="brand">
        DnD
      </Link>

      <div className="nav-links">{navLinks}</div>

      <div className="actions">
        <Dropdown
          opener={popoverTarget => (
            <Button
              handlingClass="btn-notifications"
              icon="fa-solid fa-bell"
              theme="secondary"
              htmlAttrs={{ popoverTarget }}
            />
          )}
        >
          <CampaignInvitations />
        </Dropdown>

        <div className="nav-divider" />

        <Link to="/profile" className="profile-link">
          <div className="user-info">
            <span className="username">{user?.username}</span>
          </div>

          <div className="avatar">
            <Blobatar name={user?.username || ''} animate="hover" />
          </div>
        </Link>

        <button
          className="btn-logout"
          onClick={handleLogout}
          title={text.logout()}
        >
          <Icon icon="fa-solid fa-right-from-bracket" />
        </button>
      </div>
    </nav>
  )
}

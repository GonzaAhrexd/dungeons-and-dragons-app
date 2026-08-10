import { useAuthStore } from '@/features/auth/store/auth.store'
import './Navbar.css'
import { Link, useLocation } from 'wouter'
import { homeText } from './Navbar.langs'
import { useText } from '@/features/langs/hooks/useText'
import { Icon } from '../Icon/Icon'
import { useCampaignStore } from '@/features/campaigns/store/campaign.store'

export const Navbar = () => {
  const text = useText(homeText)

  const user = useAuthStore(state => state.user)
  const campaignId = useCampaignStore(state => state.currentCampaignId)
  const logout = useAuthStore(state => state.logout)
  const resetCampaignId = useCampaignStore(state => state.reset)

  const [location] = useLocation()

  const HARDCODED_USER = {
    username: 'Sir Valerius',
    avatar: user?.avatar || `https://api.dicebear.com/7.x/adventurer/svg?seed=${user?.username || 'SirValerius'}`,
  }

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
        Dungeons and Dragons
      </Link>

      <div className="nav-links">{navLinks}</div>

      <div className="actions">
        <Link to="/profile" className="user-info">
          <span className="username">
            {user?.username || HARDCODED_USER.username}
          </span>
        </Link>

        <Link className="avatar" to="/profile">
          <img
            src={HARDCODED_USER.avatar}
            alt={HARDCODED_USER.username}
            className="avatar-img"
          />
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

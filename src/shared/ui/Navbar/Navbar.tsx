import { useAuthStore } from '@/features/auth/store/auth.store'
import './Navbar.css'
import { Link, useLocation } from 'wouter'
import { homeText } from './Navbar.langs'
import { useText } from '@/features/langs/hooks/useText'

export const Navbar = () => {
  const text = useText(homeText)

  const user = useAuthStore(state => state.user)
  const [location] = useLocation()

  const NAV_LINKS = [
    { label: text.dashboard(), href: '/dashboard' },
    { label: text.campaigns(), href: '/campaigns' },
    { label: text.mycharacters(), href: '/characters' },
  ]

  const navLinks = NAV_LINKS.map(({ label, href }) => (
    <Link
      key={href}
      to={href}
      className={`link ${location === href ? 'is-active' : ''}`}
    >
      {label}
    </Link>
  ))

  return (
    <nav className="cmp-navbar">
      <Link to="/dashboard" className="brand">
        Dungeons and Dragons
      </Link>

      <div className="nav-links">
        {navLinks}
        <Link
          key="/profile"
          to="/profile"
          className={`profile link ${location === '/profile' ? 'is-active' : ''}`}
        >
          {user?.username}
        </Link>
      </div>

      <div className="actions">
        <div className="divider" />

        <div className="user-info">
          <span className="username">{user?.username}</span>
        </div>

        <div className="avatar">{user?.username?.[0]?.toUpperCase()}</div>
      </div>
    </nav>
  )
}

import { Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/selected work', label: 'selected work' },
  { to: '/making', label: 'making' },
  { to: '/teaching', label: 'teaching' },
]

export default function Nav() {
  const { pathname } = useLocation()

  return (
    <nav style={{
      display: 'flex',
      gap: '24px',
      fontSize: '12px',
    }}>
      {links.map(({ to, label }) => (
        <Link
          key={to}
          to={to}
          style={{
            textDecoration: pathname.startsWith(to) ? 'underline' : 'none',
            color: 'inherit',
          }}
        >
          {label}
        </Link>
      ))}
    </nav>
  )
}

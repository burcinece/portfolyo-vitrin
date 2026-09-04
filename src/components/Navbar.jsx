import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'

const links = [
  { to: '/', label: 'Ana Sayfa' },
  { to: '/projeler', label: 'Projeler' },
  { to: '/iletisim', label: 'İletişim' },
]

const linkClass = ({ isActive }) =>
  `text-sm transition-colors duration-200 ${
    isActive ? 'text-zinc-200' : 'text-zinc-500 hover:text-zinc-300'
  }`

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <NavLink
          to="/"
          className="text-sm font-medium text-zinc-200 transition-colors duration-200 hover:text-zinc-100"
        >
          Burçin Ece Şahin
        </NavLink>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={linkClass} end={link.to === '/'}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="text-xl text-zinc-400 transition-colors duration-200 hover:text-zinc-100 md:hidden"
          aria-label="Menüyü aç/kapat"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {isOpen && (
        <ul className="flex flex-col gap-4 border-t border-zinc-800 px-6 py-4 md:hidden">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={linkClass}
                end={link.to === '/'}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}

export default Navbar

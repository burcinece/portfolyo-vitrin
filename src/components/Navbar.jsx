import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'

const links = [
  { to: '/', label: 'Ana Sayfa' },
  { to: '/projeler', label: 'Projeler' },
  { to: '/ozgecmis', label: 'Özgeçmiş' },
  { to: '/iletisim', label: 'İletişim' },
]

const linkClass = ({ isActive }) =>
  `transition-colors duration-200 hover:text-brand-accent ${
    isActive ? 'text-brand-accent' : 'text-slate-300'
  }`

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800 bg-brand-dark/80 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <NavLink
          to="/"
          className="text-lg font-semibold tracking-wide text-white transition-colors duration-200 hover:text-brand-accent"
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
          className="text-2xl text-slate-200 transition-colors duration-200 hover:text-brand-accent md:hidden"
          aria-label="Menüyü aç/kapat"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {isOpen && (
        <ul className="flex flex-col gap-4 border-t border-slate-800 px-6 py-4 md:hidden">
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

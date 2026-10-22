import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { navItems } from '../../data/nav'
import { profile } from '../../data/profile'
import { ThemeToggle } from '../theme/ThemeToggle'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 ${scrolled ? 'glass' : 'bg-transparent'} transition-colors`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" onClick={() => setOpen(false)} className="font-mono text-sm tracking-tight text-[var(--text)]">
          {profile.name.split(' ')[0].toLowerCase()}
          <span className="text-[var(--accent)]">@</span>
          devops
        </Link>
        <nav className="hidden items-center gap-3 xl:flex 2xl:gap-5" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`/#${item.id}`}
              className="text-sm text-[var(--muted)] transition hover:text-[var(--text)]"
            >
              {item.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>
        <div className="flex items-center gap-2 xl:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="rounded-md border border-[var(--line)] p-2"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      {open ? (
        <nav className="glass border-t border-[var(--line)] px-4 py-4 xl:hidden" aria-label="Mobile">
          <ul className="grid gap-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`/#${item.id}`}
                  className="block rounded-md px-3 py-2 text-[var(--text)]"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  )
}

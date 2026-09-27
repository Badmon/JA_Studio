import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS, SECTION_IDS } from '../../data/siteConfig'
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll'
import { useScrolled } from '../../hooks/useScrolled'
import { EASE_OUT } from '../../lib/motion'
import { cn } from '../../lib/cn'
import { Button } from '../ui/Button'
import { Logo } from '../ui/Logo'
import { ThemeToggle } from '../ui/ThemeToggle'

const MOBILE_MENU_ID = 'mobile-menu'

export function Navbar() {
  const scrolled = useScrolled()
  const [menuOpen, setMenuOpen] = useState(false)
  useLockBodyScroll(menuOpen)

  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('resize', onResize)
    }
  }, [menuOpen])

  const solid = scrolled || menuOpen

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b border-line bg-surface transition-shadow duration-300',
        solid && 'shadow-soft',
      )}
    >
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-ink-inverse"
      >
        Saltar al contenido
      </a>
      <nav
        aria-label="Navegación principal"
        className={cn(
          'container-page flex items-center justify-between transition-[height] duration-300',
          solid ? 'h-16' : 'h-20',
        )}
      >
        <Logo onClick={closeMenu} />

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-4 py-2 text-[0.95rem] font-semibold text-ink-soft transition-colors duration-200 hover:bg-surface-muted hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="hidden md:block">
            <Button href={`#${SECTION_IDS.contact}`} className="h-11">
              Hablemos
            </Button>
          </div>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls={MOBILE_MENU_ID}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="grid size-11 place-items-center rounded-full bg-ink text-ink-inverse md:hidden"
          >
            {menuOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id={MOBILE_MENU_ID}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: EASE_OUT }}
            className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-surface md:hidden"
          >
            <ul className="container-page flex flex-col pt-6">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 + i * 0.05, ease: EASE_OUT }}
                  className="border-b border-line"
                >
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="block py-5 text-4xl font-extrabold tracking-tight"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="container-page pt-8 pb-10">
              <Button href={`#${SECTION_IDS.contact}`} onClick={closeMenu} size="lg" withArrow className="w-full">
                Hablemos
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

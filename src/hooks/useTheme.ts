import { useEffect, useState } from 'react'
import { applyTheme, getStoredTheme, getTheme, storeTheme, type Theme } from '../lib/theme'

/**
 * Tema actual y función para alternarlo. Mientras el usuario no elija uno,
 * sigue los cambios de la preferencia del sistema.
 */
export function useTheme(): { theme: Theme; toggleTheme: () => void } {
  const [theme, setTheme] = useState<Theme>(getTheme)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => {
      if (getStoredTheme()) return
      const next: Theme = mediaQuery.matches ? 'dark' : 'light'
      applyTheme(next)
      setTheme(next)
    }
    mediaQuery.addEventListener('change', onChange)
    return () => mediaQuery.removeEventListener('change', onChange)
  }, [])

  const toggleTheme = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    applyTheme(next)
    storeTheme(next)
    setTheme(next)
  }

  return { theme, toggleTheme }
}

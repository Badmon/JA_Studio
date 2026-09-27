import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'
import { cn } from '../../lib/cn'

/** Botón para alternar entre modo claro y oscuro. */
export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
      title={isDark ? 'Modo claro' : 'Modo oscuro'}
      className={cn(
        'grid size-11 place-items-center rounded-full text-ink ring-1 ring-line ring-inset',
        'transition-colors duration-200 hover:bg-surface-muted',
        className,
      )}
    >
      {isDark ? <Sun className="size-5" aria-hidden="true" /> : <Moon className="size-5" aria-hidden="true" />}
    </button>
  )
}

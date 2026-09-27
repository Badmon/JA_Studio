import { SITE, SECTION_IDS } from '../../data/siteConfig'
import { cn } from '../../lib/cn'

type LogoProps = {
  tone?: 'dark' | 'light'
  className?: string
  onClick?: () => void
}

/** Marca del sitio: monograma + nombre. */
export function Logo({ tone = 'dark', className, onClick }: LogoProps) {
  const initial = SITE.name.trim().charAt(0).toUpperCase()

  return (
    <a
      href={`#${SECTION_IDS.top}`}
      onClick={onClick}
      aria-label={`${SITE.name}, volver al inicio`}
      className={cn('group inline-flex items-center gap-3 font-extrabold tracking-tight', className)}
    >
      <span
        aria-hidden="true"
        className={cn(
          'relative grid size-9 place-items-center rounded-xl text-sm transition-transform duration-300 group-hover:-rotate-6',
          tone === 'dark' ? 'bg-ink text-white' : 'bg-white text-ink',
        )}
      >
        {initial}
        <span className="absolute -top-0.5 -right-0.5 size-2.5 rounded-full bg-accent" />
      </span>
      <span className={cn('text-lg', tone === 'dark' ? 'text-ink' : 'text-white')}>{SITE.name}</span>
    </a>
  )
}

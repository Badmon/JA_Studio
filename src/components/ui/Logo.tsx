import { SITE, SECTION_IDS } from '../../data/siteConfig'
import { cn } from '../../lib/cn'

type LogoProps = {
  tone?: 'dark' | 'light'
  className?: string
  onClick?: () => void
}

/** Marca del sitio: logo J + nombre. */
export function Logo({ tone = 'dark', className, onClick }: LogoProps) {
  return (
    <a
      href={`#${SECTION_IDS.top}`}
      onClick={onClick}
      aria-label={`${SITE.name}, volver al inicio`}
      className={cn('group inline-flex items-center gap-3 font-extrabold tracking-tight', className)}
    >
      <svg
        aria-hidden="true"
        viewBox="274 240 779 793"
        fill="currentColor"
        className={cn(
          'size-9 transition-transform duration-300 group-hover:-rotate-6',
          tone === 'dark' ? 'text-ink' : 'text-white',
        )}
      >
        <path d="M905 376L729 489L728 763L711 810L671 849L631 864L552 864L553 679L374 697L303 749L497 941L615 942L659 927L906 755Z" />
        <path d="M1053 243L751 240L274 567L581 565Z" />
        <path d="M936 773L673 940L542 1016L535 1023L536 1030L541 1033L756 1033L936 914Z" />
      </svg>
      <span className={cn('text-lg', tone === 'dark' ? 'text-ink' : 'text-white')}>{SITE.name}</span>
    </a>
  )
}

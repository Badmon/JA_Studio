import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { cn, isExternalHref } from '../../lib/cn'

type ButtonVariant = 'primary' | 'secondary' | 'light' | 'ghost-light'
type ButtonSize = 'md' | 'lg'

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  /** Muestra una flecha que se desplaza al pasar el cursor. */
  withArrow?: boolean
  /** Icono decorativo antes del texto (por ejemplo, el de WhatsApp). */
  icon?: ReactNode
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-ink text-ink-inverse hover:bg-ink/85',
  secondary: 'bg-transparent text-ink ring-1 ring-inset ring-ink/20 hover:ring-ink hover:bg-surface',
  light: 'bg-white text-carbon hover:bg-accent',
  'ghost-light': 'bg-transparent text-white ring-1 ring-inset ring-white/30 hover:ring-white',
}

const sizeClasses: Record<ButtonSize, string> = {
  md: 'h-12 px-6 text-[0.95rem]',
  lg: 'h-14 px-8 text-base sm:h-16 sm:px-9 sm:text-lg',
}

const arrowBgClasses: Record<ButtonVariant, string> = {
  primary: 'bg-accent text-accent-ink',
  secondary: 'bg-ink text-ink-inverse',
  light: 'bg-carbon text-white',
  'ghost-light': 'bg-white text-carbon',
}

/** Botón tipo "pill". Siempre es un enlace porque todas las acciones del sitio navegan. */
export function Button({
  href,
  children,
  variant = 'primary',
  size = 'md',
  withArrow = false,
  icon,
  className,
  ...rest
}: ButtonProps) {
  const external = isExternalHref(href)

  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={cn(
        'group inline-flex items-center justify-center gap-3 rounded-full font-semibold tracking-tight whitespace-nowrap',
        'transition-[background-color,color,box-shadow,transform] duration-300 active:scale-[0.98]',
        variantClasses[variant],
        sizeClasses[size],
        withArrow && 'pr-2 sm:pr-2',
        className,
      )}
      {...rest}
    >
      {icon && (
        <span aria-hidden="true" className="-ml-1 flex shrink-0 items-center">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {withArrow && (
        <span
          aria-hidden="true"
          className={cn(
            'grid place-items-center rounded-full transition-transform duration-300 group-hover:rotate-45',
            size === 'lg' ? 'size-10 sm:size-12' : 'size-8',
            arrowBgClasses[variant],
          )}
        >
          <ArrowUpRight className="size-4 -rotate-0" strokeWidth={2.25} />
        </span>
      )}
      {external && <span className="sr-only"> (se abre en una pestaña nueva)</span>}
    </a>
  )
}

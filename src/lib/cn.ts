/** Une clases condicionales ignorando valores vacíos. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ')
}

/** Indica si un enlace sale del sitio (para abrirlo en otra pestaña). */
export function isExternalHref(href: string): boolean {
  return /^https?:\/\//.test(href)
}

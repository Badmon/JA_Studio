import { useEffect } from 'react'

/** Bloquea el scroll del documento mientras `locked` sea true (por ejemplo, con el menú móvil abierto). */
export function useLockBodyScroll(locked: boolean): void {
  useEffect(() => {
    if (!locked) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [locked])
}

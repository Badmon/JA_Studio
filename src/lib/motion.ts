import type { Transition, Variants } from 'framer-motion'

/** Curva de easing suave usada en todo el sitio. */
export const EASE_OUT = [0.22, 1, 0.36, 1] as const

export const baseTransition: Transition = { duration: 0.7, ease: EASE_OUT }

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: baseTransition },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: EASE_OUT } },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: baseTransition },
}

/** Revela una línea de texto desde abajo, dentro de un contenedor con overflow oculto. */
export const clipReveal: Variants = {
  hidden: { y: '105%' },
  visible: { y: '0%', transition: { duration: 0.8, ease: EASE_OUT } },
}

export function stagger(staggerChildren = 0.08, delayChildren = 0): Variants {
  return {
    hidden: {},
    visible: { transition: { staggerChildren, delayChildren } },
  }
}

/** Configuración común para animaciones que se disparan al entrar en pantalla. */
export const inViewOnce = { once: true, amount: 0.2 } as const

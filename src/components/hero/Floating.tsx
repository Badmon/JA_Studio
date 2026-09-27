import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { EASE_OUT } from '../../lib/motion'
import { cn } from '../../lib/cn'

type FloatingProps = {
  children: ReactNode
  className?: string
  /** Retraso de la aparición inicial, en segundos. */
  delay?: number
  /** Duración de un ciclo de flotación (5–8 s). */
  duration?: number
  /** Desplazamiento vertical máximo en píxeles. */
  distance?: number
  rotate?: number
}

/** Envuelve un elemento decorativo: aparece suavemente y flota de forma continua. */
export function Floating({
  children,
  className,
  delay = 0,
  duration = 6,
  distance = 10,
  rotate = 0,
}: FloatingProps) {
  return (
    <motion.div
      aria-hidden="true"
      className={cn('pointer-events-none absolute', className)}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay, ease: EASE_OUT }}
      style={{ rotate }}
    >
      <motion.div
        animate={{ y: [0, -distance, 0] }}
        transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay: delay + 0.8 }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

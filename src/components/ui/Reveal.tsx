import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { fadeUp, inViewOnce } from '../../lib/motion'

type RevealProps = {
  children: ReactNode
  className?: string
  variants?: Variants
  delay?: number
  as?: 'div' | 'li' | 'p' | 'span'
}

/** Anima su contenido una sola vez cuando entra en pantalla. */
export function Reveal({ children, className, variants = fadeUp, delay = 0, as = 'div' }: RevealProps) {
  const Component = motion[as]
  return (
    <Component
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={inViewOnce}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </Component>
  )
}

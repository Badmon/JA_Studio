import { motion } from 'framer-motion'
import { clipReveal, fadeUp, inViewOnce, stagger } from '../../lib/motion'
import { cn } from '../../lib/cn'

type SectionTitleProps = {
  /** Una cadena o varias líneas; cada línea se revela por separado. */
  title: string | readonly string[]
  eyebrow?: string
  description?: string
  id?: string
  align?: 'left' | 'center'
  as?: 'h1' | 'h2'
  className?: string
  titleClassName?: string
}

export function SectionTitle({
  title,
  eyebrow,
  description,
  id,
  align = 'left',
  as = 'h2',
  className,
  titleClassName,
}: SectionTitleProps) {
  const lines = typeof title === 'string' ? [title] : title
  const Heading = motion[as]

  return (
    <motion.div
      className={cn('max-w-5xl', align === 'center' && 'mx-auto text-center', className)}
      initial="hidden"
      whileInView="visible"
      viewport={inViewOnce}
      variants={stagger(0.1)}
    >
      {eyebrow && (
        <motion.p variants={fadeUp} className="eyebrow mb-6 flex items-center gap-3">
          <span aria-hidden="true" className="size-2 rounded-full bg-accent ring-4 ring-accent/25" />
          {eyebrow}
        </motion.p>
      )}
      <Heading id={id} className={cn('text-section', titleClassName)} variants={stagger(0.1)}>
        {lines.map((line) => (
          <span key={line} className="-mb-[0.12em] block overflow-hidden pb-[0.12em]">
            <motion.span className="block" variants={clipReveal}>
              {line}
            </motion.span>
          </span>
        ))}
      </Heading>
      {description && (
        <motion.p variants={fadeUp} className="text-lead mt-6 max-w-2xl text-ink-soft">
          {description}
        </motion.p>
      )}
    </motion.div>
  )
}

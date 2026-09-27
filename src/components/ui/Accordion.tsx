import { useId, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { EASE_OUT } from '../../lib/motion'
import { cn } from '../../lib/cn'

export type AccordionItem = {
  id: string
  title: string
  content: string
}

type AccordionProps = {
  items: readonly AccordionItem[]
  /** Id del elemento abierto al cargar. */
  defaultOpenId?: string
}

/** Acordeón accesible: solo un panel abierto a la vez. */
export function Accordion({ items, defaultOpenId }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? null)
  const baseId = useId()

  return (
    <ul className="border-t border-line">
      {items.map((item) => {
        const isOpen = openId === item.id
        const buttonId = `${baseId}-${item.id}-button`
        const panelId = `${baseId}-${item.id}-panel`

        return (
          <li key={item.id} className="border-b border-line">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="group flex w-full items-center justify-between gap-6 py-6 text-left sm:py-7"
              >
                <span className="text-lg font-bold tracking-tight sm:text-xl lg:text-2xl">
                  {item.title}
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    'grid size-10 shrink-0 place-items-center rounded-full transition-colors duration-300',
                    isOpen ? 'bg-ink text-ink-inverse' : 'bg-surface text-ink group-hover:bg-accent group-hover:text-accent-ink',
                  )}
                >
                  <Plus
                    className={cn('size-5 transition-transform duration-300', isOpen && 'rotate-45')}
                  />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: EASE_OUT }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pr-14 pb-7 text-ink-soft">{item.content}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        )
      })}
    </ul>
  )
}

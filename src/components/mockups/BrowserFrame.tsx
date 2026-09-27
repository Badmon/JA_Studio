import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type BrowserFrameProps = {
  url: string
  children: ReactNode
  className?: string
}

/** Marco de navegador ilustrado para mostrar mockups. */
export function BrowserFrame({ url, children, className }: BrowserFrameProps) {
  return (
    <div className={cn('theme-light overflow-hidden rounded-2xl bg-white shadow-float ring-1 ring-ink/5', className)}>
      <div className="flex items-center gap-3 border-b border-line/70 px-4 py-3">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-[#ff6159]" />
          <span className="size-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="size-2.5 rounded-full bg-[#28c941]" />
        </div>
        <div className="mx-auto w-1/2 truncate rounded-full bg-bg px-3 py-1 text-center text-[0.65rem] font-medium text-ink-muted">
          {url}
        </div>
        <span className="w-10" aria-hidden="true" />
      </div>
      {children}
    </div>
  )
}

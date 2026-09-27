import { Check, MessageCircle, TrendingUp } from 'lucide-react'

/* Ilustraciones decorativas del hero, construidas solo con CSS. */

const card = 'rounded-2xl bg-surface shadow-float ring-1 ring-ink/5 dark:ring-ink/10'

export function BrowserCard() {
  return (
    <div className={`${card} w-52 overflow-hidden`}>
      <div className="flex items-center gap-1 border-b border-line/70 px-3 py-2">
        <span className="size-1.5 rounded-full bg-[#ff6159]" />
        <span className="size-1.5 rounded-full bg-[#ffbd2e]" />
        <span className="size-1.5 rounded-full bg-[#28c941]" />
        <span className="ml-2 h-2.5 flex-1 rounded-full bg-bg" />
      </div>
      <div className="space-y-2 p-3">
        <div className="h-16 rounded-lg bg-gradient-to-br from-accent to-[#9fcf4a]" />
        <div className="h-2 w-4/5 rounded-full bg-ink/80" />
        <div className="h-1.5 w-3/5 rounded-full bg-ink/15" />
        <div className="h-4 w-14 rounded-full bg-ink" />
      </div>
    </div>
  )
}

export function ChartCard() {
  const bars = [35, 50, 42, 64, 58, 80, 92]
  return (
    <div className={`${card} w-48 p-4`}>
      <div className="flex items-center justify-between">
        <p className="text-[0.7rem] font-semibold text-ink-muted">Visitas</p>
        <span className="flex items-center gap-1 rounded-full bg-accent/50 px-1.5 py-0.5 text-[0.6rem] font-bold">
          <TrendingUp className="size-3" /> 48%
        </span>
      </div>
      <p className="mt-1 text-xl font-extrabold tracking-tight">12.480</p>
      <div className="mt-3 flex h-12 items-end gap-1">
        {bars.map((h, i) => (
          <span
            key={i}
            className={`flex-1 rounded-sm ${i === bars.length - 1 ? 'bg-ink' : 'bg-ink/15'}`}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  )
}

export function ProjectMiniCard() {
  return (
    <div className={`${card} w-56 p-3`}>
      <div className="relative h-24 overflow-hidden rounded-xl bg-[#e6ddd0]">
        <div className="absolute -right-4 -bottom-6 size-20 rounded-full bg-[#c9b79c]" />
        <div className="absolute top-3 left-3 h-2 w-16 rounded-full bg-carbon/70" />
        <div className="absolute top-7 left-3 h-1.5 w-10 rounded-full bg-carbon/25" />
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div>
          <p className="text-xs font-bold">Nuevo sitio web</p>
          <p className="text-[0.65rem] text-ink-muted">Publicado hoy</p>
        </div>
        <span className="grid size-6 place-items-center rounded-full bg-accent">
          <Check className="size-3.5" strokeWidth={3} />
        </span>
      </div>
    </div>
  )
}

export function PhoneCard() {
  return (
    <div className="w-32 rounded-[1.6rem] bg-carbon p-1.5 shadow-float dark:ring-1 dark:ring-ink/15">
      <div className="overflow-hidden rounded-[1.25rem] bg-bg">
        <div className="mx-auto mt-1.5 h-1.5 w-10 rounded-full bg-carbon" />
        <div className="space-y-1.5 p-2.5">
          <div className="h-14 rounded-lg bg-accent" />
          <div className="h-1.5 w-4/5 rounded-full bg-ink/80" />
          <div className="h-1.5 w-3/5 rounded-full bg-ink/20" />
          <div className="grid grid-cols-2 gap-1.5 pt-1">
            <div className="h-9 rounded-md bg-surface" />
            <div className="h-9 rounded-md bg-surface" />
          </div>
          <div className="h-4 rounded-full bg-ink" />
        </div>
      </div>
    </div>
  )
}

export function MessageBubble() {
  return (
    <div className="flex max-w-60 items-start gap-2">
      <span className="grid size-8 shrink-0 place-items-center rounded-full bg-accent">
        <MessageCircle className="size-4" />
      </span>
      <div className="rounded-2xl rounded-tl-md bg-surface px-3.5 py-2.5 text-[0.8rem] leading-snug font-medium shadow-float ring-1 ring-ink/5 dark:ring-ink/10">
        ¡Hola! Quiero una web para mi negocio 👋
      </div>
    </div>
  )
}

export function DashboardCard() {
  return (
    <div className={`${card} w-60 p-3`}>
      <div className="mb-2 flex items-center justify-between">
        <p className="text-xs font-bold">Panel</p>
        <span className="h-1.5 w-8 rounded-full bg-ink/15" />
      </div>
      <div className="grid grid-cols-3 gap-1.5">
        {[
          ['Pedidos', '86'],
          ['Clientes', '214'],
          ['Tareas', '12'],
        ].map(([label, value]) => (
          <div key={label} className="rounded-lg bg-bg p-2">
            <p className="text-[0.55rem] text-ink-muted">{label}</p>
            <p className="text-sm font-extrabold">{value}</p>
          </div>
        ))}
      </div>
      <svg viewBox="0 0 200 40" className="mt-2 h-10 w-full" fill="none">
        <path
          d="M0 32 C 25 30, 35 18, 60 20 S 100 30, 120 18 S 165 6, 200 8"
          stroke="var(--color-ink)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M0 32 C 25 30, 35 18, 60 20 S 100 30, 120 18 S 165 6, 200 8 V40 H0Z"
          fill="var(--color-accent)"
          opacity="0.45"
        />
      </svg>
    </div>
  )
}

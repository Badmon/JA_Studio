import { BrowserFrame } from './BrowserFrame'

const rows = [
  { name: 'Laptop Pro 14"', qty: 24, status: 'Disponible', tone: 'bg-accent/60' },
  { name: 'Monitor 27"', qty: 8, status: 'Stock bajo', tone: 'bg-[#ffd8a8]' },
  { name: 'Impresora láser', qty: 12, status: 'Disponible', tone: 'bg-accent/60' },
  { name: 'Router empresarial', qty: 3, status: 'Pedido', tone: 'bg-[#d0e4ff]' },
]

const bars = [45, 70, 55, 85, 60, 95, 75]

export function InventoryMockup() {
  return (
    <div className="relative bg-[#dfe7cf] p-5 sm:p-10">
      <BrowserFrame url="inventario.tuempresa.com">
        <div className="grid grid-cols-[3.25rem_1fr] sm:grid-cols-[8.5rem_1fr]">
          <aside className="space-y-2 border-r border-line/70 bg-bg/60 p-3" aria-hidden="true">
            <div className="mb-4 h-5 w-5 rounded-md bg-ink sm:w-16" />
            {['Resumen', 'Equipos', 'Proveedores', 'Movimientos'].map((item, i) => (
              <div
                key={item}
                className={`truncate rounded-md px-2 py-1.5 text-[0.6rem] font-semibold ${i === 1 ? 'bg-white text-ink shadow-soft' : 'text-ink-muted'}`}
              >
                <span className="hidden sm:inline">{item}</span>
                <span className="sm:hidden">•</span>
              </div>
            ))}
          </aside>
          <div className="space-y-3 p-3 sm:p-4">
            <div className="grid grid-cols-3 gap-2">
              {[
                ['Equipos', '1.248'],
                ['Proveedores', '36'],
                ['Movimientos', '+312'],
              ].map(([label, value]) => (
                <div key={label} className="rounded-lg bg-bg p-2">
                  <p className="truncate text-[0.55rem] text-ink-muted">{label}</p>
                  <p className="text-sm font-extrabold sm:text-base">{value}</p>
                </div>
              ))}
            </div>
            <div className="flex h-16 items-end gap-1.5 rounded-lg bg-bg p-2 sm:h-20">
              {bars.map((h, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-sm ${i === 5 ? 'bg-ink' : 'bg-accent'}`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <div className="divide-y divide-line/70 rounded-lg border border-line/70">
              {rows.map((row) => (
                <div key={row.name} className="flex items-center justify-between gap-2 px-2 py-1.5">
                  <span className="truncate text-[0.6rem] font-semibold">{row.name}</span>
                  <span className="flex shrink-0 items-center gap-2">
                    <span className="text-[0.6rem] text-ink-muted">{row.qty}</span>
                    <span className={`rounded-full px-1.5 py-0.5 text-[0.5rem] font-bold ${row.tone}`}>
                      {row.status}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </BrowserFrame>
    </div>
  )
}

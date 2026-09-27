import { BrowserFrame } from './BrowserFrame'

const columns = [
  { title: 'Nuevos', color: 'bg-[#d0e4ff]', cards: ['Pedido #1042', 'Pedido #1043'] },
  { title: 'En proceso', color: 'bg-[#ffd8a8]', cards: ['Pedido #1038', 'Pedido #1040', 'Pedido #1041'] },
  { title: 'Entregados', color: 'bg-accent/70', cards: ['Pedido #1031', 'Pedido #1035'] },
]

export function ManagementMockup() {
  return (
    <div className="relative bg-[#d9dde6] p-5 sm:p-10">
      <BrowserFrame url="gestion.tunegocio.com">
        <div className="space-y-3 p-3 sm:p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-extrabold">Pedidos de la semana</p>
            <div className="flex -space-x-1.5" aria-hidden="true">
              {['bg-accent', 'bg-[#ffd8a8]', 'bg-[#d0e4ff]', 'bg-ink'].map((c) => (
                <span key={c} className={`size-5 rounded-full ring-2 ring-white ${c}`} />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {columns.map((col) => (
              <div key={col.title} className="rounded-lg bg-bg p-1.5 sm:p-2">
                <p className="mb-2 flex items-center gap-1 truncate text-[0.55rem] font-bold sm:text-[0.6rem]">
                  <span className={`size-1.5 shrink-0 rounded-full ${col.color}`} />
                  {col.title}
                </p>
                <div className="space-y-1.5">
                  {col.cards.map((card) => (
                    <div key={card} className="rounded-md bg-white p-1.5 shadow-soft">
                      <p className="truncate text-[0.55rem] font-semibold">{card}</p>
                      <div className={`mt-1 h-1 w-2/3 rounded-full ${col.color}`} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-3 rounded-lg bg-ink p-2.5 text-white">
            <div className="grid size-7 shrink-0 place-items-center rounded-md bg-accent text-[0.6rem] font-extrabold text-ink">
              98%
            </div>
            <div className="min-w-0">
              <p className="truncate text-[0.6rem] font-bold">Pedidos entregados a tiempo</p>
              <div className="mt-1 h-1 rounded-full bg-white/20">
                <div className="h-1 w-[98%] rounded-full bg-accent" />
              </div>
            </div>
          </div>
        </div>
      </BrowserFrame>
    </div>
  )
}

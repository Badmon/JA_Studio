import { BrowserFrame } from './BrowserFrame'

export function CorporateMockup() {
  return (
    <div className="relative bg-[#e6ddd0] p-5 sm:p-10">
      <BrowserFrame url="www.empresa.com">
        <div className="bg-[#fbfaf7]">
          <div className="flex items-center justify-between px-4 py-3" aria-hidden="true">
            <div className="h-3 w-14 rounded-full bg-ink" />
            <div className="hidden gap-3 sm:flex">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="h-1.5 w-8 rounded-full bg-ink/20" />
              ))}
            </div>
            <div className="h-5 w-14 rounded-full bg-ink" />
          </div>
          <div className="grid gap-4 px-4 pt-4 pb-6 sm:grid-cols-[1.1fr_1fr] sm:px-6 sm:pt-6">
            <div className="space-y-3">
              <p className="text-[0.55rem] font-bold tracking-widest text-ink-muted uppercase">
                Consultoría y servicios
              </p>
              <p className="text-xl leading-none font-extrabold tracking-tight sm:text-2xl">
                Soluciones que impulsan tu empresa.
              </p>
              <div className="space-y-1.5" aria-hidden="true">
                <div className="h-1.5 w-full rounded-full bg-ink/10" />
                <div className="h-1.5 w-4/5 rounded-full bg-ink/10" />
              </div>
              <div className="flex gap-2" aria-hidden="true">
                <div className="h-6 w-20 rounded-full bg-ink" />
                <div className="h-6 w-16 rounded-full ring-1 ring-ink/20" />
              </div>
            </div>
            <div
              className="relative hidden min-h-32 overflow-hidden rounded-xl bg-[#c9b79c] sm:block"
              aria-hidden="true"
            >
              <div className="absolute -right-6 -bottom-8 size-32 rounded-full bg-[#a88d69]" />
              <div className="absolute top-4 left-4 size-10 rounded-full bg-accent" />
              <div className="absolute bottom-4 left-4 rounded-lg bg-white/90 px-2 py-1.5 text-[0.55rem] font-bold shadow-soft">
                +120 clientes
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 border-t border-line/70 px-4 py-4 sm:px-6" aria-hidden="true">
            {['Asesoría', 'Proyectos', 'Soporte'].map((item) => (
              <div key={item} className="rounded-lg bg-white p-2 shadow-soft">
                <div className="mb-2 size-4 rounded-md bg-accent" />
                <p className="text-[0.6rem] font-bold">{item}</p>
                <div className="mt-1 h-1 w-3/4 rounded-full bg-ink/10" />
              </div>
            ))}
          </div>
        </div>
      </BrowserFrame>
    </div>
  )
}

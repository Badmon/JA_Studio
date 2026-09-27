import type { Client } from '../../data/clients'

type ClientLogoProps = {
  client: Client
}

/** Muestra el logo del cliente o, si aún no hay imagen, su nombre como marcador. */
export function ClientLogo({ client }: ClientLogoProps) {
  if (client.logo) {
    return (
      <img
        src={client.logo}
        alt={client.name}
        loading="lazy"
        decoding="async"
        className="h-8 w-auto max-w-[9rem] object-contain opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 sm:h-10"
      />
    )
  }

  return (
    <span className="inline-flex items-center gap-2 text-lg font-extrabold tracking-tight text-ink-muted/80 sm:text-xl">
      <span aria-hidden="true" className="size-5 rounded-md border-2 border-current" />
      {client.name}
    </span>
  )
}

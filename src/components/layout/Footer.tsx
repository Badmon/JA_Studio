import { NAV_LINKS, SECTION_IDS, SITE } from '../../data/siteConfig'
import { socialLinks } from '../../data/socialLinks'
import { isExternalHref } from '../../lib/cn'
import { Logo } from '../ui/Logo'
import { SocialIcon } from '../ui/SocialIcon'

export function Footer() {
  return (
    <footer className="bg-bg pt-8 pb-10 sm:pt-10">
      <div className="container-page">
        <div className="grid gap-12 border-b border-line pb-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-5 text-ink-soft">
              Desarrollador de soluciones digitales. Creo herramientas pensadas para ayudarte a crecer.
            </p>
          </div>

          <nav aria-label="Navegación del pie de página">
            <h2 className="eyebrow mb-5">Navegación</h2>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="font-semibold hover:underline hover:underline-offset-4">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={`#${SECTION_IDS.contact}`} className="font-semibold hover:underline hover:underline-offset-4">
                  Contacto
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow mb-5">Redes</h2>
            <ul className="space-y-3">
              {socialLinks.map((link) => {
                const external = isExternalHref(link.href)
                return (
                  <li key={link.network}>
                    <a
                      href={link.href}
                      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="inline-flex items-center gap-3 font-semibold break-all hover:underline hover:underline-offset-4"
                    >
                      <SocialIcon network={link.network} className="size-4 shrink-0" />
                      {link.label}
                      {external && <span className="sr-only"> (se abre en una pestaña nueva)</span>}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-8 text-sm text-ink-muted sm:flex-row sm:justify-between">
          <p>
            © {SITE.year} {SITE.name}. Todos los derechos reservados.
          </p>
          <p>Diseñado y desarrollado por {SITE.name}</p>
        </div>
      </div>
    </footer>
  )
}

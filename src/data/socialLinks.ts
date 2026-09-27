import { SITE, SOCIAL_PROFILES } from './siteConfig'
import { getEmailLink, getWhatsAppLink } from '../lib/contact'

export type SocialNetwork = 'linkedin' | 'github' | 'whatsapp' | 'email'

export type SocialLink = {
  network: SocialNetwork
  label: string
  href: string
}

/**
 * Enlaces de contacto y redes. LinkedIn y GitHub se configuran en `SOCIAL_PROFILES`
 * (src/data/siteConfig.ts) y solo se muestran si tienen URL.
 */
const allLinks: SocialLink[] = [
  { network: 'linkedin', label: 'LinkedIn', href: SOCIAL_PROFILES.linkedin },
  { network: 'github', label: 'GitHub', href: SOCIAL_PROFILES.github },
  { network: 'whatsapp', label: `WhatsApp · ${SITE.phoneDisplay}`, href: getWhatsAppLink() },
  { network: 'email', label: SITE.email, href: getEmailLink() },
]

export const socialLinks: SocialLink[] = allLinks.filter((link) => link.href !== '')

export function getSocialLink(network: SocialNetwork): SocialLink | undefined {
  return socialLinks.find((link) => link.network === network)
}

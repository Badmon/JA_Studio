import { Mail } from 'lucide-react'
import type { SocialNetwork } from '../../data/socialLinks'
import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from './BrandIcons'

type SocialIconProps = {
  network: SocialNetwork
  className?: string
}

export function SocialIcon({ network, className }: SocialIconProps) {
  switch (network) {
    case 'linkedin':
      return <LinkedInIcon className={className} />
    case 'github':
      return <GitHubIcon className={className} />
    case 'whatsapp':
      return <WhatsAppIcon className={className} />
    case 'email':
      return <Mail className={className} aria-hidden="true" />
  }
}

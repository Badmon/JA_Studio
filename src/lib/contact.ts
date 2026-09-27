import { SITE, WHATSAPP_DEFAULT_MESSAGE, WHATSAPP_NUMBER } from '../data/siteConfig'

/** Genera un enlace https://wa.me/ con un mensaje predefinido. */
export function getWhatsAppLink(message: string = WHATSAPP_DEFAULT_MESSAGE): string {
  const number = WHATSAPP_NUMBER.replace(/\D/g, '')
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

/** Mensaje de WhatsApp que empieza con el saludo habitual ("Hola Juan, …"). */
export function greetingMessage(text: string): string {
  return `Hola ${SITE.firstName}, ${text}`
}

/** Genera un enlace mailto: con asunto y cuerpo opcionales. */
export function getEmailLink(subject?: string, body?: string): string {
  const params = new URLSearchParams()
  if (subject) params.set('subject', subject)
  if (body) params.set('body', body)
  const query = params.toString().replace(/\+/g, '%20')
  return `mailto:${SITE.email}${query ? `?${query}` : ''}`
}

/** Enlace tel: en formato internacional. */
export function getPhoneLink(): string {
  return `tel:+${WHATSAPP_NUMBER.replace(/\D/g, '')}`
}

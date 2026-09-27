import { SITE } from '../../data/siteConfig'
import { cn } from '../../lib/cn'

type ProfilePhotoProps = {
  className?: string
  /** Si es true, la imagen es decorativa (el nombre ya aparece al lado) y se oculta a lectores de pantalla. */
  decorative?: boolean
}

/**
 * Fotografía de perfil. Mantiene la proporción original con object-fit: cover,
 * así que el contenedor decide el recorte sin deformar la imagen.
 */
export function ProfilePhoto({ className, decorative = false }: ProfilePhotoProps) {
  const { src, width, height, alt } = SITE.photo
  return (
    <img
      src={src}
      alt={decorative ? '' : alt}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      className={cn('size-full object-cover', className)}
    />
  )
}

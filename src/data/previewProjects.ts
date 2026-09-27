import previewUrls from 'virtual:preview-projects'
import type { Project } from './projects'

/**
 * Capturas de ejemplo para previsualizar la galería mientras no hay capturas propias.
 *
 * - Viven en src/assets/preview-projects/, carpeta ignorada por Git: nunca llegan a GitHub ni a Netlify.
 * - Solo se usan en modo desarrollo (`npm run dev`): el plugin `previewProjects` de vite.config.ts
 *   entrega la lista vacía durante el build, así que nunca se empaquetan.
 * - Cuando tengas tus capturas reales, agrégalas en src/data/projects.ts y borra esa carpeta.
 */

/** Proporción de las tarjetas de ejemplo. Las capturas son 1600×831 (≈1,92:1); 16:9 recorta solo ~4 % por lado. */
const PREVIEW_ASPECT_RATIO = '16/9'

/**
 * Títulos genéricos por archivo (image1.webp, image2.webp…), sin nombres de marcas.
 * Si un archivo no aparece aquí, la tarjeta se titula "Ejemplo N".
 */
const PREVIEW_TITLES: Record<string, string> = import.meta.env.DEV
  ? {
      image1: 'Gestión de producto',
      image2: 'Plataforma de pagos',
      image3: 'CRM de ventas',
      image4: 'Automatización',
      image5: 'Infraestructura cloud',
      image6: 'Espacio colaborativo',
      image7: 'Analítica de producto',
      image8: 'Plataforma de despliegue',
      image9: 'Diseño web',
    }
  : {}

function loadPreviewProjects(): Project[] {
  return previewUrls.map((url, index) => {
    const fileName = url.split('/').pop()?.replace(/\.webp$/, '') ?? ''
    const title = PREVIEW_TITLES[fileName] ?? `Ejemplo ${index + 1}`
    return {
      id: 1000 + index,
      title,
      category: 'Captura de ejemplo',
      image: url,
      imageAlt: `Captura de ejemplo: ${title}`,
      aspectRatio: PREVIEW_ASPECT_RATIO,
    }
  })
}

export const previewProjects: Project[] = loadPreviewProjects()

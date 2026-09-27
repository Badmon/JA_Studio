import { existsSync, readdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { defineConfig } from 'vite'
import type { Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { SITE, SITE_TITLE } from './src/data/siteConfig.ts'

function escapeHtml(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

/** Rellena los metadatos de index.html con los datos de src/data/siteConfig.ts. */
function siteMetadata(): Plugin {
  const url = SITE.url.replace(/\/$/, '')
  const urlTags = url
    ? [
        `<link rel="canonical" href="${url}/" />`,
        `<meta property="og:url" content="${url}/" />`,
      ].join('\n    ')
    : ''
  const values: Record<string, string> = {
    '%SITE_TITLE%': escapeHtml(SITE_TITLE),
    '%SITE_NAME%': escapeHtml(SITE.name),
    '%SITE_DESCRIPTION%': escapeHtml(SITE.description),
    '%SITE_OG_IMAGE%': `${url}/og-image.png`,
    '<!-- %SITE_URL_TAGS% -->': urlTags,
  }

  return {
    name: 'site-metadata',
    transformIndexHtml: {
      order: 'pre',
      handler: (html) =>
        Object.entries(values).reduce((result, [token, value]) => result.replaceAll(token, value), html),
    },
  }
}

const PREVIEW_MODULE_ID = 'virtual:preview-projects'
const PREVIEW_DIR = 'src/assets/preview-projects'

/**
 * Capturas de ejemplo solo para desarrollo.
 * Con `npm run dev` expone la lista de imágenes de src/assets/preview-projects (carpeta ignorada por Git),
 * que el servidor de Vite sirve directamente. En el build devuelve una lista vacía sin leer la carpeta,
 * así que esas capturas nunca se empaquetan ni se publican.
 */
function previewProjects(): Plugin {
  const resolvedId = `\0${PREVIEW_MODULE_ID}`
  let isDevServer = false

  return {
    name: 'preview-projects',
    configResolved(config) {
      isDevServer = config.command === 'serve'
    },
    resolveId(id) {
      return id === PREVIEW_MODULE_ID ? resolvedId : undefined
    },
    // Al agregar o borrar una imagen .webp de la carpeta, se regenera la lista y se recarga la página.
    configureServer(server) {
      const dir = resolve(PREVIEW_DIR)
      const onChange = (file: string) => {
        if (dirname(file) !== dir || !file.endsWith('.webp')) return
        const graph = server.environments.client.moduleGraph
        const mod = graph.getModuleById(resolvedId)
        if (mod) graph.invalidateModule(mod)
        server.ws.send({ type: 'full-reload' })
      }
      server.watcher.add(dir)
      server.watcher.on('add', onChange)
      server.watcher.on('unlink', onChange)
    },
    load(id) {
      if (id !== resolvedId) return undefined
      if (!isDevServer || !existsSync(PREVIEW_DIR)) return 'export default []'
      const urls = readdirSync(PREVIEW_DIR)
        .filter((file) => file.endsWith('.webp'))
        // Orden numérico: image2 va antes que image10.
        .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
        .map((file) => `/${PREVIEW_DIR}/${file}`)
      return `export default ${JSON.stringify(urls)}`
    },
  }
}

export default defineConfig({
  plugins: [siteMetadata(), previewProjects(), react(), tailwindcss()],
})

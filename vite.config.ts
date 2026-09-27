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

export default defineConfig({
  plugins: [siteMetadata(), react(), tailwindcss()],
})

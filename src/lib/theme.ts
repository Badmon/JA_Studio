/**
 * Tema claro/oscuro. El tema inicial lo aplica un script en index.html (antes de pintar);
 * este módulo se encarga de los cambios posteriores. Mantén ambos sincronizados.
 */
export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'theme'

/** Color de la barra del navegador en móviles, igual al fondo de cada tema. */
const THEME_COLOR: Record<Theme, string> = {
  light: '#F4F3EF',
  dark: '#121211',
}

export function getTheme(): Theme {
  if (typeof document === 'undefined') return 'light'
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
}

/** Preferencia elegida por el usuario, o null si sigue la del sistema. */
export function getStoredTheme(): Theme | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    return value === 'light' || value === 'dark' ? value : null
  } catch {
    return null
  }
}

export function storeTheme(theme: Theme) {
  try {
    localStorage.setItem(STORAGE_KEY, theme)
  } catch {
    // Sin acceso al almacenamiento (modo privado): el cambio vale solo para esta visita.
  }
}

export function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLOR[theme])
}

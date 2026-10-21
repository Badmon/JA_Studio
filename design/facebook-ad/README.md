# Anuncio de Facebook e Instagram — JL Soluciones Digitales

Versión vigente: Desde S/ 249, WhatsApp 938 629 083. Cuatro formatos en oscuro (más el 4:5 en claro), para asignar cada uno a su ubicación en el Administrador de anuncios de Meta:

| Formato | Imagen | Fuente | Ubicaciones |
|---|---|---|---|
| 4:5 | `anuncio-oscuro-4x5-1080x1350.png` | `anuncio-oscuro-4x5.html` | Feed de Facebook e Instagram |
| 4:5 (claro) | `anuncio-claro-4x5-1080x1350.png` | `anuncio-claro-4x5.html` | Alternativa clara del feed (solo existe en 4:5) |
| 1:1 | `anuncio-oscuro-1x1-1080x1080.png` | `anuncio-oscuro-1x1.html` | Marketplace, búsqueda, feed del perfil, otras ubicaciones que recortan |
| 9:16 | `anuncio-oscuro-9x16-1080x1920.png` | `anuncio-oscuro-9x16.html` | Stories y Reels |
| 1.91:1 | `anuncio-oscuro-1.91x1-1920x1005.png` | `anuncio-oscuro-1.91x1.html` | Horizontal (feed de escritorio, columna derecha, enlaces) |

En el 9:16 todo el contenido está entre y=270 y y=1490 (zonas seguras: ~270 px arriba y ~430 px abajo, y margen lateral de 110 px) para que la interfaz de Stories y Reels no tape el contacto ni el precio.

## Regenerar los PNG

Desde esta carpeta, con Chrome instalado (cambia el nombre y el tamaño según el formato):

```bash
CH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
"$CH" --headless=new --disable-gpu --hide-scrollbars --allow-file-access-from-files \
  --window-size=1080,1920 --screenshot=$PWD/anuncio-oscuro-9x16-1080x1920.png "file://$PWD/anuncio-oscuro-9x16.html"
```

El horizontal está diseñado a 1200×628 y se exporta a 1920×1005 con `--window-size=1200,628 --force-device-scale-factor=1.6`.

Los HTML leen la tipografía de `node_modules/` y las capturas de `public/projects/` y de esta carpeta (`mublier-mobile.jpg`).

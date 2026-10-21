# Ilustraciones de servicios — JL Soluciones Digitales

Tres piezas cuadradas (1080×1080) para promocionar cada servicio. Mockups con capturas de proyectos propios (Mublier, Huella Veterinaria, Hotel Love, Finanzas).

| Pieza | Imagen | Fuente |
|---|---|---|
| Diseñamos tu página web | `01-pagina-web-1080x1080.png` | `01-pagina-web.html` |
| Diseñamos tu Landing Page | `02-landing-page-1080x1080.png` | `02-landing-page.html` |
| Diseñamos tu web informativa | `03-web-informativa-1080x1080.png` | `03-web-informativa.html` |

Contacto en las tres: WhatsApp 938 629 083. Sin precio (no se ha definido uno por servicio).

## Regenerar

```bash
CH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
"$CH" --headless=new --disable-gpu --hide-scrollbars --allow-file-access-from-files \
  --window-size=1080,1080 --screenshot=$PWD/01-pagina-web-1080x1080.png "file://$PWD/01-pagina-web.html"
```

Los HTML leen la tipografía de `node_modules/`, las capturas de escritorio de `public/projects/` y las capturas móviles de esta carpeta (`mublier-mobile.jpg`, `huella-mobile.jpg`).

# Reglas del proyecto

## Git

- **Pedir permiso antes de cada commit y cada push.** Después de hacer y verificar un cambio, muestra un resumen de lo que cambió y el mensaje de commit propuesto, y espera la aprobación explícita antes de ejecutar `git commit` o `git push`. La aprobación de un commit no vale para los siguientes.
- Todo el trabajo se hace en la rama `dev` y se sube a `origin dev`.
- `main` es producción (Netlify publica cada push a `main`): no se hace commit ni push a `main` salvo que se pida explícitamente.

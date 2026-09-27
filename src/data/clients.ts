/**
 * Logos de clientes para la sección de confianza (debajo del hero).
 *
 * - Si `logo` tiene una ruta (por ejemplo '/clients/mi-cliente.svg', guardado en /public/clients/),
 *   se muestra la imagen.
 * - Si `logo` está vacío, se muestra el nombre como marcador de posición.
 * - Mientras el arreglo esté vacío, la fila de logos no se muestra.
 * Ejemplo: { id: 'mi-cliente', name: 'Mi Cliente', logo: '/clients/mi-cliente.svg' }
 */

export type Client = {
  id: string
  name: string
  logo: string
}

export const clients: Client[] = []

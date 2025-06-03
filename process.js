
export function analizarArgumentos(argv) {
  // Desestructuramos argv para obtener:
  // methodRaw = método HTTP (ejemplo: GET, POST, DELETE)
  // resourceRaw = recurso o ruta (ejemplo: products o products/15)
  // argsRaw = el resto de argumentos adicionales (ejemplo: parámetros para crear un producto)
  const [, , methodRaw, resourceRaw, ...argsRaw] = argv;

  // Convierte el método a mayúsculas para estandarizar (ejemplo: "get" -> "GET")
  let method = methodRaw?.toUpperCase();

  // Inicializa resource con resourceRaw tal cual fue recibido
  let resource = resourceRaw;

  // Copia los argumentos adicionales en un nuevo array
  let args = [...argsRaw];

  // Si el recurso incluye una barra '/', como en "products/15"
  // Se separa en dos partes: el recurso principal y el id
  if (resourceRaw?.includes('/')) {
    const [res, id] = resourceRaw.split('/');
    resource = res;               // Actualiza el recurso (ejemplo: "products")
    args = [id, ...argsRaw];      // Añade el id como primer argumento en args
  }

  // Devuelve un objeto con el método, recurso y argumentos procesados
  return { method, resource, args };
}


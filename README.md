# pre_entrega_ulises_oreste

# Proyecto de Gestión de Productos con FakeStore API

Este proyecto es una aplicación de consola en Node.js que permite interactuar con la API FakeStore para gestionar productos mediante comandos.

1 - Instala las dependencias: npm install

2 - Este proyecto usa comandos con el siguiente formato:

    - npm run start "MÉTODO" "RECURSO" [ARGUMENTOS] -

    "MÉTODO": HTTP method (GET, POST, DELETE).

    "RECURSO": recurso a manipular (solo products soportado).

    [ARGUMENTOS]: argumentos adicionales según el comando.

3 - Comandos disponibles: 

    - Listar todos los productos: npm run start GET products

    - Obtener un producto por ID: npm run start GET products/<id> (ejemplo: npm run start GET products/15)

    - Crear un producto nuevo: npm run start POST products <title> <price> <category> (ejemplo: npm run start POST products "Camiseta Dino" 300 remeras)

    - Eliminar un producto por ID: npm run start DELETE products/<id> (ejemplo: npm run start DELETE products/7) 

4 - Requisitos: 
    - Node.js versión 18 o superior

    - Conexión a internet para acceder a FakeStore API











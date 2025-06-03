// Estudiante: Ulises Oreste
// Pre-entrega

import { analizarArgumentos } from "./process.js";

const BASE_URL = "https://fakestoreapi.com";

const getAllProducts = async () => {
    try {
        //GET para obtener todos los productos
        const res = await fetch(`${BASE_URL}/products`);

        if (!res.ok)
            throw new Error(
                `Error al obtener productos: ${res.status} ${res.statusText}`
            );

        const data = await res.json();

        console.log(data);
    } catch (error) {
        console.error("Error en getAllProducts:", error.message);
    }
};

// Función para obtener un producto específico por ID
const getProduct = async (id) => {
    try {
        //GET para obtener un producto en particular
        const res = await fetch(`${BASE_URL}/products/${id}`);

        if (!res.ok)
            throw new Error(
                `Error al obtener producto ${id}: ${res.status} ${res.statusText}`
            );

        const data = await res.json();

        console.log(data);
    } catch (error) {
        console.error("Error en getProduct:", error.message);
    }
};

// crear un nuevo producto
const createProduct = async (title, price, category) => {
    try {
        // Construye el cuerpo de la petición con los datos recibidos
        const body = {
            title,
            price: parseFloat(price), // Asegura que price sea un número decimal
            description: "A new product",
            image: "https://i.pravatar.cc",
            category,
        };

        // POST para crear el producto en la API
        const res = await fetch(`${BASE_URL}/products`, {
            method: "POST",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" },
        });

        if (!res.ok)
            throw new Error(
                `Error al crear producto: ${res.status} ${res.statusText}`
            );

        const data = await res.json();

        console.log(data);
    } catch (error) {
        console.error("Error en createProduct:", error.message);
    }
};

//  eliminar un producto por ID
const deleteProduct = async (id) => {
    try {
        // DELETE para eliminar el producto de la API
        const res = await fetch(`${BASE_URL}/products/${id}`, {
            method: "DELETE",
        });

        if (!res.ok)
            throw new Error(
                `Error al eliminar producto ${id}: ${res.status} ${res.statusText}`
            );

        const data = await res.json();

        console.log(data);
    } catch (error) {
        console.error("Error en deleteProduct:", error.message);
    }
};

// Función que interpreta los argumentos de la línea de comandos y ejecuta la acción correspondiente
const main = async () => {
    // Analiza los argumentos recibidos desde la terminal
    const { method, resource, args } = analizarArgumentos(process.argv);

    // Si es un GET para todos los productos o uno específico
    if (method === "GET" && resource === "products") {
        if (args[0]) {
            // Si se pasa un ID, busca un producto específico
            await getProduct(args[0]);
        } else {
            // Si no, muestra todos los productos
            await getAllProducts();
        }
    }
    // Si es un POST para crear producto
    else if (method === "POST" && resource === "products") {
        const [title, price, category] = args;

        // Valida que se reciban todos los parámetros necesarios
        if (!title || !price || !category) {
            console.error("Faltan parámetros: <title> <price> <category>");
            return;
        }
        await createProduct(title, price, category);
    }
    // Si es un DELETE para eliminar producto
    else if (method === "DELETE" && resource === "products") {
        const id = args[0];

        // Valida que se haya indicado un ID para eliminar
        if (!id) {
            console.error("Debes indicar un ID de producto para eliminar.");
            return;
        }
        await deleteProduct(id);
    }
    // Comando no reconocido
    else {
        console.log("Comando no reconocido.");
    }
};

main();

// Una interfaz se declara con la palabra clave interface. Incluso puedes fusionar interfaces si usas el mismo nombre.

interface Producto {
    nombre: string;
}

interface Producto {
    precio: number;
}

// Ahora 'Producto' tiene ambos campos

const item: Producto = {
    nombre: "Laptop",
    precio: 2000000,
};


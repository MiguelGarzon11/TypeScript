// El constructor es un método especial que se ejecuta cuando creas una nueva instancia de la clase. Lo usamos para inicializar propiedades.

class Persona1 {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }
}

// Ejercicio:

class Producto {
    nombre: string;
    precio: number;

    constructor(nombre: string, precio: number ) {
        this.nombre = nombre;
        this.precio = precio;
    }
    
}
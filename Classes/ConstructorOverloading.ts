// Constructor Overloading ( Sobrecarga de Constructores ).
// TypeScript no permite múltiples constructores como en otros lenguajes, pero puedes usar páramtros opcionales o unión de tipos.

class Libro {
    titulo: string;
    autor?: string;

    constructor(titulo: string, autor?: string) {
        this.titulo = titulo;
        if (autor) this.autor = autor;
    }
}


class Animal {
    nombre: string;
    edad?: number;

    constructor(nombre: string, edad?: number) {
        this.nombre = nombre;
        if (edad) this.edad = edad;
    }
}2

new Animal("Oliver"); // Solo nombre.
new Animal("Margarita", 10);  // Nombre y edad. a
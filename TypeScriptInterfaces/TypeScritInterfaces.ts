// Una interface es una forma de definir la forma (shape) que debe tener un objeto. Es decir, puedes decirle a TypeScript qué propiedades y tipos debe tener un objeto, clase o función.

interface Persona {
    nombre: string;
    edad: number;
}

const miguel: Persona = {
    nombre: "Miguel",
    edad: 18,
};

// Ejercicio: 
// Crea una interfaz llamada Libro con los siguientes campos:

interface Libro {
    titulo: string;
    autor: string;
    paginas: number;
}

const Donquijote: Libro = {
    titulo: "Donquijote",
    autor: "Miguel de Cervantes",
    paginas: 1400,
}
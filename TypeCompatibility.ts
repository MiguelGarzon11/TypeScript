// ¿Qué es?
// Es el sistema que usa TypeScript para determinar si un tipo puede usarse en lugar de otro. TypeScript tiene un sistema de tipos estructural, es decir, lo que importa es la forma (estructura), no el nombre.

// Ejemplo:

// type Persona = { nombre: string, edad: number };
let usuario = { nombre:"Camila", edad: 18, ciudad: "Bogotá" };
let animal = { nombre: "Firulais", edad: 25};

let p: Persona = usuario; // Válido: Usuario tiene al menos las propiedades requeridas.
let c: Persona = animal; // Error: Falta la propiedad 'edad'.

// Una clase es una plantilla para crear objetos con propiedades y métodos, Se usa mucho en Programación Orientada a Objetos.

class Persona {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    saludar() {
        console.log(`Hola, soy ${this.nombre}`);
    }
}


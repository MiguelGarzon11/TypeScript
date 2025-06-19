// Son clases que no se pueden instanciar directamente. Se usan como una base para otras clases.
// Pueden tener métodos "bstractos" que deben ser implementados por las clases hijas.

abstract class Animal {
    abstract hacerSonido(): void;
}

// Ejercicio:

abstract class Vehiculo {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    } 

    abstract moverse(): void;
}

class Moto extends Vehiculo {
    constructor(nombre: string) {
        super(nombre);
    }

    moverse() {
        console.log("La moto se movio");
    }
}

const miMoto = new Moto("Yamaha");
miMoto.moverse();   // La moto se movio
console.log(miMoto.nombre);     // Yamaha

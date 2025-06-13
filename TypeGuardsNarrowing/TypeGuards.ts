// Un type Guard es una forma de decirle a TypeScript:
// Confia en mi, si pasa esta condición, este valor es de este tipo.

// Es una herramienta para hacer Narrowing.


// 1. typeof (Para tipos primitivos)
// Se usa con tipos primitivos como string, number, boolean, etc.

function imprimir( valor: string | number ) {
    if (typeof valor === "string") {
        console.log("Es un string: " + valor.toUpperCase());
    }

    else {
        console.log("Es un númer: " + valor.toFixed());
    }
}


// 2. instanceof
// Se usa con clases  o instancias de objetos.

class Perro {
    ladrar() {
        console.log("¡Guau!");
    }
}

class Gato {
    maullar() {
        console.log("¡Miau!");
    }
}

function hablar(animal: Perro | Gato) {
    if (animal instanceof Perro) {
        animal.ladrar();
    }

    else {
        animal.maullar();
    }
}


// 3. Equality
// Tienes dos tipos de personajes: guerrero y mago. Cada uno tiene una acción especial distinta. Usa un type guard con === para ejecutar la acción correcta según el tipo.

type Guerrero = {
    clase: "guerrero";  
    nombre: string;
    atacar: () => void;
}

type Mago = { 
    clase: "mago";
    nombre: string;
    lanzarHechizo: () => void;
};

type Personaje = Guerrero | Mago;

function realizarAccion(personaje: Personaje) {
    if (personaje.clase === "guerrero") {
        personaje.atacar();
    }

    else {
        personaje.lanzarHechizo();
    }
}


// 4. Verificación por verdad/falsedad (Truthiness).
// útil para asegurarse de que un valor no es null o undefined.

function saludar(nombre?: string) {
    if (nombre) {
        console.log("Hola, " + nombre.toUpperCase());
    }

    else {
        console.log("Hola, visitante");
    }
}


// 5. Type Predicates (Predicados de tipo personalizados)
// Permiten crear funciones que le dicen a TypeScript el tipo de una variable.

type Auto = {
    ruedas: number;
    conducir: () => void;
};

type Barco = { 
    motores: number;
    navegar: () => void;
};

function esAuto(vehiculo: Auto | Barco): vehiculo is Auto {
    return (vehiculo as Auto).conducir !== undefined;
}

function usarVehiculo(vehiculo: Auto | Barco) {
    if (esAuto(vehiculo)) {
        vehiculo.conducir();
    }
    else {
        vehiculo.navegar();
    }
}


const miAuto: Auto = {
    ruedas: 4,
    conducir: () => console.log("Conduciendo por la autopista"),
};

const miBarco: Barco = {
    motores: 2,
    navegar: () => console.log("Navegando por el mar"),
};

usarVehiculo(miAuto);   // Conduciendo por la autopista 
usarVehiculo(miBarco);  // Navegando por el mar 



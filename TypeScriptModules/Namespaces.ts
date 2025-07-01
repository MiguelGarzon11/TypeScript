// Son una forma de agrupar código relacionado en un solo bloque lógico.
// Se usa con la palabra clave namespace

// Sintaxis 

namespace Matematicas {
    export function sumar(a: number, b: number): number {
        return a + b;
    }
}

// El export es necesario para poder usar la función fuera del namespace.

// Como se usa?

let resultado = Matematicas.sumar(5, 3);
console.log(resultado); // 8

// Todo está en un solo archivo. Si lo usas en varios archivos, necesitas /// <reference path="..." />



// Ejercicio: 

namespace Utilidades {
    export const version: string = "1.0.0";

    export function saludar(nombre: string): void {
        console.log(`Hola, ${nombre}! Bienvenido a Utilidades v ${version}`);
    }

    export class Calculadora {
        sumar(a: number, b: number): number {
            return a + b;
        }

        restar(a: number, b: number): number {
            return a - b;
        }
    }
}


// Como usarlo

Utilidades.saludar("Miguel"); // Hola, Miguel! Bienvenido a Utilidades v1.0.0

const calc = new Utilidades.Calculadora();
console.log(calc.sumar(5,3)); // 8
console.log(calc.restar(10,4)); // 6



// Sirven para agrupar código en archivos que hacen export e import usando el sistema de módulos estándar de JavaScript 

// util.ts 

// Exportamos una variable
export const version = "2.0.0";

// Exportamos una función
export function saludar(nombre: string): void {
  console.log(`Hola, ${nombre}! Bienvenido a la versión ${version}`);
}

// Exportamos una clase
export class Calculadora {
  sumar(a: number, b: number): number {
    return a + b;
  }
  restar(a: number, b: number): number {
    return a - b;
  }
}


// main.ts (donde usamos el modulo)

// Importamos desde utils.ts

// import { version_, saludar, Calculadora_ } from "./utils";

saludar("Miguel"); // Hola, Miguel! Bienvenido a la versión 2.0.0
console.log("Versión actual:", version); // Versión actual: 2.0.0

const calc = new Calculadora();
console.log(calc.sumar(4, 6));   // 10
console.log(calc.restar(10, 3)); // 7



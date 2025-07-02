// Un Ambient Module es una declaracion de modulo que no tiene implementación. Se usa para decirle a TypeScript "Este modulo existe, aunque no tenga código aqui".

// Se usa pricipalmente cuando:
// Usas una libreria externa 
// Quieres crear una declaración de tipos (.d.ts) para algo que viene de fuera.
// Estás escribiendo tus propias definiciones personalizadas.


// Sintaxis:

// archivo: types.d.ts
declare module "mi_libreria" {
    export function saludar(nombre: string): void;
}

// ¿Qué significa esto?
// Hay un modulo llamado mi_libreria, y cuando alguien lo importe, sabra que tiene una función llamada saludar.

// archivo main.ts 

// import { saludar } from "mi_libreria";

// saludar("Miguel");




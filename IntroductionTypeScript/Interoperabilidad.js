// ¿Qué es?

// Es la capacidad de TypeScript para funcionar junto a archivos JavaScript, permitiendo usar librerías, funciones y módulos Js dentro de un proyecto TypeScript sin problemas.

// ¿Comó se logra la interoperabilidad?

// 1. Usar código JavaScript en TypeScript

// Puedes importar archivos .js en tus archivos .ts sin errores, pero TypeScript no sabrá los tipos automáticamente, así que puedes:

// Usar any (no recomendado para código grande).
// Usar declaraciones de tipos(.d.ts).
// Usar JSDoc para anotar tipos en archivos JS.


// archivo: suma.js

function sumar(a, b) {
    return a + b;
}

module.exports = sumar;

// archivo: app.ts

const sumar = require('./suma'); // TypeScript permite esto
console.log(sumar(2, 5));

// 2. Anadir tipos manualmente:

// Puedes decirle a TypeScript qué tipos tiene una función JS:

// const resta: (a: number, b: number) => number = require('./resta');


// === Buenas prácticas

// Evita usar any, usa interfaces o tipos si conoces el tipo.

// Usa los paquetes @types/ cuando importes librerías JS.

// Añade JSDoc a tus funciones JS si quieres que TypeScript entienda los tipos.
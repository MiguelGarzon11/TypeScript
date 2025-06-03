// Una vez que escribes archivos .ts, hay 3 formas comúnes de ejecutarlos o probarlos.

// A. tsc - TypeScript Compiler

// Es el compilador oficial de TypeScript

// Convierte archivos .ts en archivos .js

// ¿Cómo se usa?

// === 1. Escribe un archivo .ts, por ejemplo;

// archivo: src/index.ts
const saludo: string = "Hola, TypeScript";
console.log(saludo);

// === 2. Compílalo:

// npx tsc
// Esto generará un archivo .js en la carpeta dist (si lo configuraste en tsconfig.json)

// === 3. Ejecuta el archivo JS con node:

// node dist/index.js


// B. ts-node -- Ejecutar código TS directamente

// Permite correr TypeScript sin compilar manualmente a JavaScript

// - Cómo instalarlo:

// npm install -D ts-node

// - Cómo usarlo:

// npx ts-node src/index.ts

// Muy útil para proyectos pequeños o scripts rápidos

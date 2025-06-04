// ¿Qué es type inference (Inferencia de tipos)?
// Es cuando TypeScript deduce automáticamente el tipo de una variable o expresión sin que tú lo declares explícitamente.

let nombre = "Miguel"; // TypeScript infiere que es un tipo string
// nombre: string

let edad = 17; // TypeScript infiere que es un tipo number
// edad: number

// Si luego intentas hacer: nombre = 42; -> x Error porque nombre es un string.

// Cuando se usa: 
// - Variables (let, const). 
// - Valores de retorno de funciones. 
// - Parámetros con valores por defecto.


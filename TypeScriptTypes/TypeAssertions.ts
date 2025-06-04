// Type Assertions 

// as [type]
// Le indica al compilador que tratas una variable como un tipo específico.

let message: unknown = "Hola"; // unknown significa que no se sabe que tipo de dato es.
let strLength = (message as string).length; // (message as string) message es un string, luego accedo a su longitud de texto que retorna 4 y strLength es 4 porque es la cantidad de letra que tiene message que le dijimos al compilador que era un tipo string


// Forma 2: usando los signos <>
let someVar1: unknown = "Hola";
let value1 = <string>someVar1;  // (no se recomienda en React/JSX)


// as any 
// Omite las comprobaciones de tipo.

let value: any = "Esto puede ser cualquier cosa";
value = 42;

// Usar any elimina las ventajas de TypeScript. Úsalo solo si es necesario (por ejemplo, en migraciones)



// as const 
// Convierte el valor en readonly y literal.

const config = {
    theme: "dark",
    fontSize: 12,
} as const; // Hace que TypeScript no generalice tipos si no que los tome de manera literal a como se definen.

// config.theme tiene tipo: "dark" (literal) y es readonly

// Ideal para objetos que no deberían modificarse y deben tener tipos literales.



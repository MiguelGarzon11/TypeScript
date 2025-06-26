// Los generics permiten escribir código flexible y reutilizable, que funciona con múltiples tipos de datos sin perder tiempo.

// Ejemplo sin Generics:

function ident(x: number): number {
    return x;
}

// Esto solo acepta números.

// Con generics:

function ident2<T>(x: T): T {
    return x;
}

// Esto acepta cualquier tipo y mantiene el tipo que se le pase.


// Ejemplo:

function echo<T>(value: T): T {
    return value;
}

const result1 = echo<string>('Hola');
const result2 = echo<number>(123);

// Aquí T sustituye por el tipo que le pasamos (string, number, etc.)



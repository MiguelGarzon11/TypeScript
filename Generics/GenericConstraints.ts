// Generic Constraints (Restricciones genéricas) 
// A veces queremos que T obligatoriamente tenga ciertas propiedades. Para eso usamos extends.

interface TieneLongitud {
    length: number;
}

function imprimirLongitud<T extends TieneLongitud>(x: T): number {
    return x.length;
}

imprimirLongitud("Hola"); // válido
imprimirLongitud([1, 2, 3]); // válido
// imprimirLongitud(123); ❌ Error: number no tiene .length
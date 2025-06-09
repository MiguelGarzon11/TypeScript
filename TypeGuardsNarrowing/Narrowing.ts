// ¿Qué es Narrowing?
// Narrowing significa que TypeScript toma un tipo más amplio y lo reduce a un tipo más específico según el flujo lógico del código.

// Ejemplo:

function imprimirID(id: number | string) {
    if (typeof id === "string") {
        // Aqui typeScript sabe que id es string
        console.log(id.toUpperCase()); // Convierte el string en MAYUSCULAS.
    }
    else {
        // Aquie typeScript sabe que id es number
        console.log(id.toFixed(2)); // Muestra el número con dos decimales.
    }
}

// Aqui id comienza siendo number | string (tipo combinado)
// Luego, typeof id === "string" estrecha (narrow) el tipo a solo string.


// Las funciones de TypeScript son similares a las de JavaScript, pero puedes especificar los tipos de los parámetros y del valor de retorno. Esto ayuda a prevenir errores.

// Typing Functions 

// Sintaxis Básica

function saludar(nombre: string): string {
    return `Hola, ${nombre}`;
}

// ¿Qué significa?
// nombre: string → el parámetro nombre debe ser un string.

// ): string → la función devuelve un string.


// Tambien se puede guardar funciones en variables

const sumar = (a: number, b: number): number => {
    return a + b;
};


// Son una forma de agrupar código relacionado en un solo bloque lógico.
// Se usa con la palabra clave namespace

namespace Matematica {
    export function suma(a: number, b: number) {
        return a + b;
    }
}

console.log(Matematica.suma(2, 3));


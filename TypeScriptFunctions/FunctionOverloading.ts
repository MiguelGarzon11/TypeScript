// La sobrecarga de funciones en TypeScript te permite definir múltiples firmas de llamada para una misma función, dependiendo de los tipos de entrada.

function combinar(a: number, b: number): number;
function combinar(a: string, b: string): string;
function combinar(a: any, b: any): any {
    return a + b;
}


// ¿Qué hace esto?

// Si le pasas números, devuelve la suma.
// Si le pasas strings, los concatena.

console.log(combinar(2, 3));        // 5
console.log(combinar("Hola ", "Miguel")); // "Hola Miguel"

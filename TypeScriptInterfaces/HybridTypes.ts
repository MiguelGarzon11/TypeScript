// Son interfaces que pueden actuar como funciones y objetos al mismo tiempo.

interface Contador {
    (): number;     // Es una función que devuelve un numero
    valor: number;      // Tambien tiene una propiedad
}

function crearContador(): Contador {
    const c = () => ++c.valor;  
    c.valor = 0;
    return c;
}

const contador = crearContador();
contador();  // 1
contador();  // 2
console.log(contador.valor); // 2


// Ejercicio:

interface Contador2 {
    (): number;
    valor: number;
}

function crearContador2(): Contador {
    const c = () => ++c.valor;
    c.valor = 0;
    return c;
}

const contador2 = crearContador2();
contador2();
contador2();
console.log(contador.valor);


// Keyof es un operador de tipo en TypeScript que se usa para obtener las claves (nombres de propiedades) de un tipo de objeto como un tipo de union (union type).

// Sirve para trabajar de forma segura con las claves de un objeto. Puedes usarlo para:

// Limitar funciones a que sólo acepten propiedades válidas de un objeto.
// Acceder dinámicamente a propiedades con seguridad de tipo.
// Hacer utilidades genéricas (como los helpers de objetos).

// Ejemplo:

type Persona1 = {
    nombre: string,
    edad: number,
    vivo: boolean,
};

type ClavesPersona = keyof Persona;

// TypeScript transforma keyof Persona en:

// type ClavesPersona = "nombre" | "edad" | "vivo";

// Es un unión strings, con los nombres de las propiedades del tipo Persona.


// Ejemplo:

interface Persona {  // Cualquier objeto de tipo Persona debe tener estas 3 propiedades: nombre (string), edad(number), y activo(boolean)
    nombre: string;
    edad: number;
    activo: boolean;
}

function obtenerValor(obj: Persona, clave: keyof Persona): any { 
    // obj: es un parámetro que recibe un objeto de tipo Persona.
    // clave es una de las claves posibles: "nombre", "edad", "activo"
    return obj[clave]; // obj[clave] accede al valor de esa propiedad de forma dinámica.
}

const usuario1: Persona = { // Esto es una variable que guarda un objeto que cumple con la estructura de la interfaz.
    nombre: "Miguel",
    edad: 18,
    activo: true,
};

console.log(obtenerValor(usuario1, "nombre"));
console.log(obtenerValor(usuario1, "activo"));
console.log(obtenerValor(usuario1, "activo"));



// Ejercicio:

type Producto = { 
    nombre: string;
    precio: number;
    enStock: boolean;
};


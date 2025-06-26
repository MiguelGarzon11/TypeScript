// Son tipos ya creados por TypeScript que nos ayudan a trabajar más rapido y con tipado seguro, sin tener que escribir todo desde cero. Son atajos inteligentes que modifican otros tipos.

// 1. Partial<T> = Convierte todos los campos de un tipo en opcionale.

type Persona1 = {
    nombre: string;
    edad: number;
};

const miguel: Partial<Persona> = {
    nombre: "Miguel",
}; // Está bien, porque edad es opcional ahora


// 2. Required<T> = Hace que todos los campos sean obligatorios.

type Usuario = {
    nombre?: string;
    edad?: number;
};

const u: Required<Usuario> = {
    nombre: "Camila",
    edad: 30,
};  // No puedes omitir ninguno



// 3. Readonly<T> = Hace que todas las propiedades sean solo lectura (no se pueden modificar).

type Carro = {
    marca: string;
};

const miCarro: Readonly<Carro> = {
    marca: "Toyota",
};

// miCarro.marca = "Honda"; Error: No se puede cambiar.


// 4. Pick<T, K> = Toma solo algunas propiedades de un tipo.

type Persona = {
    nombre: string;
    edad: number;
    correo: string;
};

type SoloNombreCorreo = Pick<Persona, "nombre" | "correo">;


// 5. Omit<T, K> = Hace lo contrario: excluye algunas propiedades.

type SoloEdad = Omit<Persona, "nombre" | "correo">;


// 6. Record<K, T> = Crea un objeto con claves de tipo K y valores de tipo T.

type Dias = "lunes" | "martes" | "miercoles";
type Horas = Record<Dias, number>;

const horas: Horas = {
    lunes: 8,
    martes: 6,
    miercoles: 4,
};


// 7. Exclude<T, U> = Quita los tipos de U desde T.

type Letras = "a" | "b" | "c";
type SinB = Exclude<Letras, "b">; // "a" | "c"


// 8. Extract<T, U> = Deja solo los tipos que están en ambos.

type Letras2 = "a" | "b" | "c";
type SoloB = Extract<Letras2, "b" | "z">;  // "b"


// 9. NonNullable<T> = Quita null y undefined de un tipo.

type Posible = string | null | undefined;
type Seguro = NonNullable<Posible>; // Solo string 


// 10. ReturnType<T> = Obtiene el tipo de retorno de una función.

function saludar() {
    return "Hola";
}

type Saludo = ReturnType<typeof saludar>;  // string


// 11. Parameters<T> = Obtiene los tipos de parámetros de una función como una tupla.

function sumar(a: number, b: number) {
    return a + b;
}

type Params = Parameters<typeof sumar>;  // [number, number]


// 12. InstanceType<T> = Obtiene el tipo de instancia de una clase.

class Persona2 {
    constructor(public nombre: string) {}
}

type Instancia = InstanceType<typeof Persona2>;
// Es igual a: { nombre: string }


// 13. Awaited<T> = Convierte un tipo Promise en el tipo que resuelve.

type PromesaString = Promise<string>;
type Resultado = Awaited<PromesaString>; // string



// | Utility Type      | ¿Qué hace?                                  |
// | ----------------- | ------------------------------------------- |
// | `Partial<T>`      | Hace todos los campos opcionales            |
// | `Required<T>`     | Todos los campos obligatorios               |
// | `Readonly<T>`     | Todos los campos solo lectura               |
// | `Pick<T, K>`      | Escoge algunas propiedades                  |
// | `Omit<T, K>`      | Quita algunas propiedades                   |
// | `Record<K, T>`    | Crea objetos con claves y valores definidos |
// | `Exclude<T, U>`   | Quita tipos                                 |
// | `Extract<T, U>`   | Extrae tipos comunes                        |
// | `NonNullable<T>`  | Quita `null` y `undefined`                  |
// | `ReturnType<T>`   | Tipo que retorna una función                |
// | `Parameters<T>`   | Tipos de los parámetros                     |
// | `InstanceType<T>` | Tipo de instancia de una clase              |
// | `Awaited<T>`      | Tipo que resuelve un `Promise`              |

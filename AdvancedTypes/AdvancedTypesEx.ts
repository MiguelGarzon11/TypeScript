// 1. Ejercicio Mapped Types: Crea un tipo que convierta todas las propiedades en opcionales

type Usuario = {
    nombre: string;
    correo: string;
    id: number;
};

type HacerTodoOpcional<T> = {
    [Propiedad in keyof T]?: T[Propiedad];
};

type UsuarioOpcional = HacerTodoOpcional<Usuario>;



// 2. Conditional Types: Crea un tipo llamado EsBooleano<T> que devuelva "Sí" si el tipo T es boolean y "No" si no lo es. Pruébalo con tipos como boolean, string, number.

type EsBooleano<T> = T extends boolean ? "Si" : "No";

type AA = EsBooleano<string>;  // No;
type BB = EsBooleano<boolean>; // Si;



// 3. Literal Types: Define un tipo llamado Direccion que solo permita los siguientes strings: "arriba", "abajo", "izquierda", "derecha". 

type direccion = "arriba" | "abajo" | "izquierda" | "derecha";

function Mover(d: direccion) {
    console.log("Moviendo a:", d);
}

Mover("arriba");


// 4. Template LIteral Types: Usando Direccion, crea un nuevo tipo llamado ComandoDireccion que combine la palabra "ir-" con cada dirección permitida.


type ComandoDireccion = `ir-${direccion}`;

const comando: ComandoDireccion = "ir-abajo"; // Aceptado 
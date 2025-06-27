// Son tipos más avanzados y poderosos que permiten manipular tipos como si fueran datos. Te ayudan a crear estructuras más inteligentes, seguras y flexibles en tu código.

// 1. Mapped Types -> Permiten recorrer propiedades de un tipo y aplicarles transformaciones.

type Persona = {
    nombre: string;
    edad: number;
};

// Mapped Type que hace todo opcional
type Opcional<T> = {
    [P in keyof T]?: T[P];
};

type PersonaOpcional = Opcional<Persona>;

// Es equivalente a hacer:

type PersonaOpcional2 = {
    nombre?: string;
    edad?: number;
};


// 2. Conditional Types -> Permiten: Si T es algo, entonces X; si no, entonces Y.

type EsString<T> = T extends string ? "si" : "no";

type A = EsString<string>; // "si";
type B = EsString<number>; // "no";


// 3. Literal Types -> Son tipos con valores específicos, como "asc" o 42.

type Direccion = "izquierda" | "derecha";

function mover(d: Direccion) {
    console.log("Moviendo a:", d);
}

mover("izquierda"); // bien
// mover("arriba"); Error


// 4. Template Literal Types -> Te permite crear strings combinando otros tipos. (Util para APIs o nombres dinámicos)

type Direccion2 = "norte" | "sur";
type Comando = `mover-${Direccion2}`;

const orden: Comando = "mover-norte"; // ✅


// 5. Recursive Types -> Un tipo que se refiere a sí mismo. Ideal para estructuras como árboles o JSON anidados.

type Nodo = {
    valor: string;
    hijos?: Nodo[];
};

const arbol: Nodo = {
    valor: "raiz",
    hijos: [
        { valor: "rama1" },
        { valor: "rama2", hijos: [ { valor: "hoja" }] },
    ],
};


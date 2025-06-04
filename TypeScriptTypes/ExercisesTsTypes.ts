//  1. as [type]

let valor: unknown = "Aprendiendo TypeScript";
let longitud = (valor as string).replace(/\s/g,"").length


// 2. as const 

const config = {
    modo: "oscuro",
    fontSize: 14,
} as const;

// 3. as any

let valorDesconocido: unknown = "mensaje secreto";
let palabras = (valorDesconocido as any).split(" ");

// 4. Non-null Assertion

const boton = document.getElementById("enviar")!;
boton?.addEventListener("click", () => console.log("Enviado"));

// 5. Satisfies

type Persona = {
    nombre: string;
    edad: number;
};

const persona = {
    nombre: "Camila",
    edad: 18,
} satisfies Persona;
// Satisfies Keyword 
// Permite verificar si un valor cumple con un tipo sin forzar el tipo inferido.

type User = {
    name: string;
    age: number;
};

const user = {
    name: "Alice",
    age: 30,
} satisfies User;

// Ventaja sobre as: mantiene el tipo inferido del objeto, pero se asegura de que cumpla con el tipo requerido.
// Puedes extender interfaces para reutilizar estructuras: 

interface Persona {
    nombre: string;
    edad: number;
}

interface Estudiante extends Persona {
    matricula: number;
}

const alumno: Estudiante = {
    nombre: "Ana",
    matricula: 12345,
    edad: 18,
};


// Ejercicio:

interface Usuario1 {
    nombre: string;
    email: string;
}

interface Administrador extends Usuario1 {
    nivelAcceso: string;
}

const cliente: Administrador = {
    nombre: "Pedro",
    email: "pedro32@gmail.com",
    nivelAcceso: "Total",
}
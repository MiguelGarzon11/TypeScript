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


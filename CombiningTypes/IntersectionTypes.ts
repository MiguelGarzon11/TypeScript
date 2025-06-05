// Intersection Types (&)
// Los tipos de intersección combinan múltiples tipos en uno solo. El valor resultante debe cumplir con todas las propiedades de los tipos combinados

// Ejemplo: 

// type Usuario = { nombre: string };
// type Empleado = { salario: number };

// type UsuarioEmpleado = Usuario & Empleado;

// const persona: UsuarioEmpleado = {
//     nombre: "Camila",
//     salario: 5000,
// };


// Ejercicio: 

type Cliente = { nombre: string, numero: number };
type Proveedor = { nombreEmpresa: string, productos: string };

type ClienteProveedor = Cliente & Proveedor;

const persona: ClienteProveedor = {
    nombre: "Camila",
    numero: 3002289586,
    nombreEmpresa: "Pollitos S.A.S",
    productos: "Computadores",
}

function informacion(persona: ClienteProveedor): string {
    return `Cliente: ${persona.nombreEmpresa}.\nNúmero: ${persona.numero}.\nEjecutiva: ${persona.nombre}.\nProductos: ${persona.productos}`
}

console.log(informacion(persona))
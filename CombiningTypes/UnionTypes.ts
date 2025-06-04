// Union Types (|) 
// Los tipos de unión permiten que una variable o parámetro acepte múltiples tipos posibles.

function imprimirId(id: string | number) {
    console.log("ID:", id);
}

imprimirId("abc123"); // Válido
imprimirId(456); // Válido 
imprimirId('false'); // Error: Boolean no es parte de la unión

// Exercise:

function accesoPermitido(tipoUsuario: "admin" | "user" | 1): string {
    switch (tipoUsuario) {
        case "admin": 
            return "Acceso total concedido.";
            break;
        case "user":
            return "Acceso limitado concedido.";
            break;
        case 1:
            return "Modo prueba activado.";
            break;
    }
} 

console.log(accesoPermitido("admin"));  // Debería mostrar: Acceso total concedido.
console.log(accesoPermitido("user"));   // Debería mostrar: Acceso limitado concedido.
console.log(accesoPermitido(1));    // Debería mostrar: Modo prueba activado.


// Type Aliases (type)
// Los alias de tipo permiten asignar un nombre personalizado a un tipo, facilitando su reutiulización y mejorando la legibilidad del código.

// Ejemplo:

// type ID = string | number;

// let identificador: ID; 
// identificador = "abc123";
// identificador = 456;


// Ejercicio:

type Pasajero = { nombre: string, tarjeta: boolean, saldo: number };
type Conductor = { nombre: string, ruta: string, placa: number };

type UsuarioTransporte = Pasajero | Conductor;

const usuario: UsuarioTransporte = {
    nombre: "Oliver",
    tarjeta: true,
    saldo: 5000,
}

const usuario2: UsuarioTransporte = {
    nombre: "Camila",
    tarjeta: false,
    saldo: 1500,
}

const usuario3: UsuarioTransporte = {
    nombre: "Miguel",
    ruta: "Napoli",
    placa: 24242424,
}

function mostrarInformacion(usuario: UsuarioTransporte ): string {
    if ("ruta" in usuario) {
        return `Señ@r ${usuario.nombre} usted es conductor de la ruta ${usuario.ruta}.\nSu número de placa es ${usuario.placa}.`;
    }
    else {
        if (usuario.tarjeta === true) {
            return `Señ@r ${usuario.nombre} usted es un usuario y pago su pasaje, Su saldo en la tarjeta es de ${usuario.saldo} pesos.`;
        }

        else {
            return `Señ@r ${usuario.nombre} usted es pasajero pero debe pagar el pasaje`;
        }
    }

}

console.log(mostrarInformacion(usuario));
console.log(mostrarInformacion(usuario2));
console.log(mostrarInformacion(usuario3));
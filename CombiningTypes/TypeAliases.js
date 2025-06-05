// Type Aliases (type)
// Los alias de tipo permiten asignar un nombre personalizado a un tipo, facilitando su reutiulización y mejorando la legibilidad del código.
var usuario = {
    nombre: "Oliver",
    tarjeta: true,
    saldo: 5000,
};
var usuario2 = {
    nombre: "Camila",
    tarjeta: false,
    saldo: 1500,
};
var usuario3 = {
    nombre: "Miguel",
    ruta: "Napoli",
    placa: 24242424,
};
function mostrarInformacion(usuario) {
    if ("ruta" in usuario) {
        return "Se\u00F1@r ".concat(usuario.nombre, " usted es conductor de la ruta ").concat(usuario.ruta, ".\nSu n\u00FAmero de placa es ").concat(usuario.placa, ".");
    }
    else {
        if (usuario.tarjeta === true) {
            return "Se\u00F1@r ".concat(usuario.nombre, " usted es un usuario y pago su pasaje, Su saldo en la tarjeta es de ").concat(usuario.saldo, " pesos.");
        }
        else {
            return "Se\u00F1@r ".concat(usuario.nombre, " usted es pasajero pero debe pagar el pasaje");
        }
    }
}
console.log(mostrarInformacion(usuario));
console.log(mostrarInformacion(usuario2));
console.log(mostrarInformacion(usuario3));

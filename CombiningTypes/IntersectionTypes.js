// Intersection Types (&)
// Los tipos de intersección combinan múltiples tipos en uno solo. El valor resultante debe cumplir con todas las propiedades de los tipos combinados
var persona = {
    nombre: "Camila",
    numero: 3002289586,
    nombreEmpresa: "Pollitos S.A.S",
    productos: "Computadores",
};
function informacion(persona) {
    return "Cliente: ".concat(persona.nombreEmpresa, ".\nN\u00FAmero: ").concat(persona.numero, ".\nEjecutiva: ").concat(persona.nombre, ".\nProductos: ").concat(persona.productos);
}
console.log(informacion(persona));

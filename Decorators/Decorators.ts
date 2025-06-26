// Los decorators son funciones que se aplican a:
// Clases, Métodos, Propiedades, Parámetros 

// Sirven para añadir metadatos o modificar comportamientos sin cambiar directamente el código del objeto decorad.

// Para usarlos necesitas habilitar "experimentalDecorators": true en tu tsconfig.json.


function logConstructor(constructor: Function) {
    console.log("Clase creada:", constructor.name);
}

@logConstructor 
class Persona {
    constructor(public nombre: string ) {}
}


// Los decorators son funciones que se aplican a:
// Clases, Métodos, Propiedades, Parámetros 

// Sirven para añadir metadatos o modificar comportamientos sin cambiar directamente el código del objeto decorad.

// Para usarlos necesitas habilitar "experimentalDecorators": true en tu tsconfig.json.


// Decorador de clase:

function Mensaje(contructor: Function) {
    console.log("Clase decorada:", contructor.name);
}

@Mensaje  // Es la etiqueta que decora la clase 
class Animal {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
        console.log("Constructor ejecutado: Se ha creado un Animal");
    }

    saludar() {
        console.log(`Hola, soy un ${this.nombre}`);
    }
}

const miAnimal = new Animal("Perro");
miAnimal.saludar();

// Cuando se crea la clase se imprime Clase decorada: Animal.


// Decorador de Métodos 

function MostrarLlamada(
  target: any,
  nombreMetodo: string,
  descriptor: PropertyDescriptor
) {
  const metodoOriginal = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Llamaste al método: ${nombreMetodo}`);
    return metodoOriginal.apply(this, args);
  };
}

class Calculadora {
//   @MostrarLlamada
  sumar(a: number, b: number): number {
    return a + b;
  }
}

const c = new Calculadora();
console.log(c.sumar(2, 3)); // Muestra: Llamaste al método: sumar

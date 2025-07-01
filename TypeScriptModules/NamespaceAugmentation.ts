// Namespace Augmentation significa "Ampliar un namespace que ya existe" 
// Osea puedes agregar nuevas funciones, variables o clases a un namespace que ya esta definido, incluso si fue declarado en otro archivo o por otra persona (Como una libreria externa)

// Sirve para extender funcionalidades sin modificar el código original.
// Para agregar tipos o funciones personalizadas a un namespace de un librería externa.

// miNamespace.ts - Namespace original 

namespace Herramientas {
    export function saludar(nombre: string) {
        console.log(`Hola, ${nombre}`);
    }
}


// aumentar.ts - Augmentación(extension del mismo namespace)

// seguimos el mismo nombre: Herramientas

namespace Herramientas {
    export function despedir(nombre: string) {
        console.log(`Chao, ${nombre}`);
    }
}


// main.ts 


/// <reference path="miNamespace.ts" /> 
/// <reference path="aumentar.ts" />

Herramientas.saludar("Miguel"); //Hola, Miguel
Herramientas.despedir("Miguel"); // Chao, Miguel


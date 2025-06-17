// Ambos ( type e interface ) pueden definir estructuras de objetos, pero tienen diferencias sutiles.

// Similaridades:

type Usuario = { nombre: string };
interface Usuario2 { nombre: string };

// | Característica                  | `type`                            | `interface`                 |
// |--------------------------------|-----------------------------------|-----------------------------|
// | Se puede extender              | ✅ Sí, con `&`                    | ✅ Sí, con `extends`        |
// | Declaración repetida           | ❌ No se puede redeclarar         | ✅ Sí, se puede fusionar    |
// | Más flexible para unión        | ✅ Mejor para unir varios tipos   | ❌ Más rígida               |
// | Se puede implementar en clases | ✅ Sí                              | ✅ Sí                       |
// | Soporte en librerías (ej. React) | ✅ Amplio soporte               | ✅ Amplio soporte           |
// | Puede describir funciones      | ✅ Sí                              | ✅ Sí                       |
// | Puede describir tipos primitivos | ✅ Sí                           | ❌ No                       |
// | Recomendado para objetos/clases | ❌ Mejor evitar                  | ✅ Más recomendado          |


// Ejercicio:

type Animal = { nombre: string, esDomestico: boolean };
interface Animal2 { nombre: string, esDomestico: boolean };


// Usa interface si:

// Vas a trabajar con clases
// Quieres aprovechar la fusión de declaraciones.


// Usa type si:

// Necesitas hacer una unión o combinación de tipos.
// Quieres tipos complejos como funciones, tuplas o combinaciones




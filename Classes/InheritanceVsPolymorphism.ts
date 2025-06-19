// Inheritance = Herencia : Una clase puede heredar de otra.
// Polymorphism = Polimorfismo : Una clase hija puede modificar o redefinir el comportamiento de métodos heredados.

class Animal {
    hacerSonido() {
        console.log("Algún sonido");
    }
}

class Gato extends Animal {
    hacerSonido() {
        console.log("Miau");
    }
}

// Ejercicio:

class Empleado {
    trabajar() {
        console.log("Trabajando");
    }
}

class Programador extends Empleado {  // Herencia: Programador hereda de Empleado
    trabajar() {     // Polimorfismo: La clase hija modifica el metodo trabajar.
        console.log("Estoy programando");  
    }
}


let e: Empleado;

e = new Programador();
e.trabajar(); // Estoy programando
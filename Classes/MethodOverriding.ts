// Method Overrinding (Sobreescritura de Métodos)
// Cuando una clase hija redefine un método que ya existe en la clase padre.

class Padre {
    saludar() { 
        console.log("Hola desde el padre");
    }
}

class Hijo extends Padre {
    saludar() {
        console.log("Hola desde el hijo");
    }
}

class Persona {
    presentarse() {
        console.log("Se presento.");
    }
}

class Estudiante extends Persona {
    presentarse() {
        console.log("Soy estudiante y estudio Ingeneria de Sistemas.")
    }
}

const persona = new Persona();
persona.presentarse();   // Se presento.

const estudiante = new Estudiante();
estudiante.presentarse();   // Soy estudiante y estudio Ingeneria de Sistemas.


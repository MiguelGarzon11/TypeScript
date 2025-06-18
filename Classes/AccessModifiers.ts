// Sirven para proteger o controlar el acceso a propiedades o métodos.

// public: todos pueden acceder (es el valor por defecto)
// private: solo accesible dentro de la clase.
// protected: accesible en la clase y sus subclases.

class Cuenta {
  private saldo: number;

  constructor() {
    this.saldo = 0;
  }

  verSaldo() {
    return this.saldo;
  }
}

// Ejercicio:

class Usuario {
  nombre: string;
  private pd: string | number;

  constructor(nombre, pd) {
    this.nombre = "Camila";
    this.pd = "Oliver24";
  }

  verPd(){
    return this.pd;
  }
}

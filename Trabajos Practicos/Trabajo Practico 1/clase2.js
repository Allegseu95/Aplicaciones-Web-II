class Persona {
  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
  }

  getNombreCompleto() {
    return this._nombre + " " + this._apellido;
  }
}

const persona = new Persona("Alex", "Santacruz");
let nombre = persona.getNombreCompleto();
console.log(nombre);

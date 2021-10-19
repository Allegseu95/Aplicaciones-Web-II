// 1.- Condiciones Basicas

const calificacion = 69;
if (calificacion >= 90) {
  console.log(`A`);
} else if (calificacion >= 80 && calificacion < 90) {
  console.log(`B`);
} else if (calificacion >= 70 && calificacion < 80) {
  console.log(`C`);
} else {
  console.log(`REPROBADO`);
}

//2.- Condiciones Aplicando switch

const n1 = 80;
const n2 = 90;
const operacion = "add";

switch (operacion) {
  case "add":
    console.log(n1 + n2);
    break;
  case "subs":
    console.log(n1 - n2);
    break;
  default:
    console.log(`No existe esa operaciOn`);
}

// 3.- Arreglos

const frutas = [
  "manzana",
  "pera",
  "guineo",
  function () {
    console.log("ok");
    return 1;
  },
];

console.log(frutas[3]());

// 4.- Encontrar la diferencia al utilizar un Set

const numeros = new Set();
numeros.add(5);
numeros.add(5);
numeros.add(6);

console.log(numeros);

// 5.- O un Map

const estudiantes = new Map();
estudiantes.set("uno", "John");

console.log(estudiantes.get("uno"));

// 6.- Puede utilizar también arreglos asociativos

let prueba = [999, 333];

prueba[0] = "ok";

//array asociativo
prueba["abc"] = "xyz";

console.log(prueba);
console.log(prueba["abc"]);

// 7.- Ciclos

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

// 8.- Utilizar un for-of

for (const fruta of frutas) {
  console.log(fruta);
}

// 9.- Utilizando un for-in

const personas = [{ nombre: "John" }, { nombre: "Javier" }];

for (const persona in personas) {
  console.log(personas[persona].nombre);
}

// 10.- Utilizar un while

let iterador = 0;
while (iterador < personas.length) {
  console.log(personas[iterador]);
  iterador++;
}

// 11.- Utilizar un do-while

do {
  console.log(personas[iterador]);
  iterador++;
} while (iterador < personas.length);

// 12.- Clases

const persona = {
  nombre: "john",
  apellido: "cevallos",
  esEstudiante: true,
  getNombreCompleto() {
    return this.nombre + " " + this.apellido;
  },
};

console.log(persona.nombre);
console.log(persona["apellido"]);
console.log(persona.getNombreCompleto());

// 13- Podemos utilizar varias nomenclaturas

class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }
  getNombre() {
    return this.nombre;
  }
}

const persona2 = new Persona("John Antonio");
nombre = persona2.getNombre();
console.log(nombre);

// 14.- Funciones

function saludar(nombre) {
  console.log(`Hi ${nombre}`);
}
function llamarSaludo(fn, parametro) {
  fn(parametro);
}
llamarSaludo(saludar, "john c");

// 15.- Definir una función como una variable

const saludame = function (nombre) {
  console.log(`Hola ${nombre}`);
};

saludame("joancema");

// 16.- Utilizar funciones flecha

const saludame2 = (nombre) => console.log(`Hola ${nombre}`);
saludame2("John Cevallos");

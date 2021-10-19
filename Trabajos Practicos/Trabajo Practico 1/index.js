let numero = 5;

const numero2 = 3;

if (numero > 5 || numero === 5) {
  console.log(numero);
}

for (let i = 0; i < 100; i++) {
  //   console.log("Actualmente I vale " + i);

  console.log(`Actualmente I vale ${i}`);
}

const { funcion1, variable } = require("./funcionesmat");

let resultado = funcion1(5, variable, "sumar");
console.log(resultado);

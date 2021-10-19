// console.log(saludar("Alex"));

function saludar(nombre) {
  return `Hola como estas ${nombre}`;
}

const saludar2 = function (nombre) {
  return `Hola como estas ${nombre}`;
};

const saludar3 = (nombre) => {
  return `Hola como estas ${nombre}`;
};

// console.log(saludar2("Alex"));
// console.log(saludar3("Alex"));

function mostrarFuncionParaSaludar(fn, parametro) {
  console.log(fn(parametro));
}

mostrarFuncionParaSaludar(saludar2, "Alex");

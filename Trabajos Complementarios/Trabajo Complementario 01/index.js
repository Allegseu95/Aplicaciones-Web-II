// Resolver los siguientes ejercicios aplicando Node.js:

// 1.- Crear una función que reciba N como parámetro y genere la tabla de multiplicar por consola utilizando recursividad.
let num = 0; //variable que determinara los numeros secuenciales para la tabla de multiplicar
let tabla = (n) => {
  //   condicional que controlara que la recursividad sea infinita
  if (num <= 10) {
    console.log(`${n} * ${num} = ${n * num}`);
    num++;
    tabla(n); // se vuelve a llamar a la propia funcion (recursividad)
  }
};

tabla(6);

// 2.- Crear un objeto Mascota que tenga como parámetros Nombre, Edad y Color.
let mascota = {
  Nombre: "Hachiko",
  Edad: 2,
  Color: "Blanco",
};

console.log(mascota);

// 3.- Definir un arreglo con sus comidas favoritas.
let comidasFav = [
  "Encebollado",
  "Alitas Picantes",
  "Salchipapa",
  "Hamburguesa",
  "Fritada",
  "Hornado",
  "Ceviche",
  "Bistec de Higado",
  "Pollo Asado",
  "Arroz Colorado de Pollo",
];

console.log(comidasFav);

// 4.- Recorrer el arreglo definido en la opción anterior y mostrarlo aplicando un do-while.
let i = 0; // variable que servira de iterador para el ciclo do-while
do {
  console.log(comidasFav[i]);
  i++;
} while (i < comidasFav.length);

// 5.- Crear una función flecha que reciba un elemento del arreglo de comidas favoritas y lo devuelva en mayúscula.
// la funcion recibe el numero de la posicion del array que se quiere mostrar en mayuscula
let mayuscula = (i) => {
  return comidasFav[i - 1].toUpperCase();
};

console.log(mayuscula(8));

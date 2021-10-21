// 1.- Definir un arreglo que será la persistencia requerida en nuestro ejercicio
const libros = [
  { id: 1, titulo: "Sistemas Distribuidos NodeJS", idautor: 1 },
  { id: 2, titulo: "Aprendiendo JS", idautor: 2 },
  { id: 3, titulo: "Clean Code JS", idautor: 2 },
];

// 4.- Para que nuestro problema sea más representativo vamos a adicionar un arreglo de autores
const autores = [
  { id: 1, nombre: "Pedro Miguel" },
  { id: 2, nombre: "Juan Andres" },
  { id: 3, nombre: "Julio Verne" },
];

// 2.- Crear una función para buscar un elemento de arreglo libro que reciba como parámetro una función o callback
function buscarLibroPorId(id, callback) {
  const libro = libros.find((libro) => libro.id === id);
  if (!libro) {
    const error = new Error();
    error.message = "Libro no encontrado";
    return callback(error);
  }
  callback(null, libro);
}

// 5.- Agregamos una función que devuelva un autor por su ID
function buscarAutorPorId(id, callback) {
  const autor = autores.find((autor) => {
    return autor.id === id;
  });
  if (!autor) {
    const error = new Error();
    error.message = "Autor no encontrado";
    return callback(error);
  }
  return callback(null, autor);
}

// 3.- Llamemos la función utilizando en el callback una función flecha que devuelva por consola el libro retornado
buscarLibroPorId(2, (err, libro) => {
  if (err) {
    return console.log(err.message);
  }
  return console.log(libro);
});

// 6.- Luego para comprender el problema de callback hell invocamos las 2 funciones
buscarLibroPorId(1, (err, libro) => {
  if (err) {
    console.log(err.message);
    return;
  }
  buscarAutorPorId(libro.idautor, (err, autor) => {
    libro.autor = autor;
    // delete libro.idautor;
    console.log(`El libro ${libro.titulo} fue escrito por ${autor.nombre}`);
  });
});

// 7.- Para mejorar la estructura de nuestro código y evitar el callback hell ahora vamos a convertir nuestras funciones para que devuelvan promesas.
function buscarLibroPorId2(id) {
  return new Promise((resolve, reject) => {
    const libro = libros.find((libro) => {
      libro.id === id;
    });

    if (!libro) {
      const error = new Error();
      error.message = "Libro no encontrado";
      reject(error);
    }
    resolve(libro);
  });
}

function buscarAutorPorId2(id) {
  return new Promise((resolve, reject) => {
    const autor = autores.find((autor) => {
      autor.id === id;
    });

    if (!autor) {
      const error = new Error();
      error.message = "Autor no encontrado";
      reject(error);
    }
    resolve(autor);
  });
}
// Resolve o reject según la existencia del libro en este caso.

// 8.- De esa manera cambia la secuencia asincrónica para el seguimiento del código.
buscarLibroPorId2(3)
  .then((libro) => {
    return buscarAutorPorId2(libro.idautor);
  })
  .then((autor) => {
    console.log(`El autor del libro es ${autor.nombre}`);
  })
  .catch((error) => {
    console.log(error.message);
  });
// Esta estructura es mucho más clara que la de los callback

// 9.- Luego vamos a aplicar el concepto de async/await, para aquello cambiamos las funciones para que puedan ser llamadas de forma asíncronica
async function buscarLibroPorId3(id) {
  const libro = libros.find((libro) => libro.id === id);
  if (!libro) {
    const error = new Error();
    error.message = "Libro no encontrado";
    throw error;
  }
  return libro;
}

async function buscarAutorPorId3(id) {
  const autor = autores.find((autor) => autor.id === id);
  if (!autor) {
    const error = new Error();
    error.message = "Autor no encontrado";
    throw error;
  }
  return autor;
}

// 10.- Simplificamos el código en una función
async function main() {
  const libro = await buscarLibroPorId3(3);
  const autor = await buscarAutorPorId3(libro.idautor);
  console.log(`Libro se llama ${libro.titulo} y el autor es ${autor.nombre}`);
}

// 11.- Y por último llamamos la función principal
main();

// Aplicar promesas y async/await para solucionar un problema aplicado a su proyecto autónomo que tenga por lo menos 3 arreglos.
// Estos 3 arreglos deben tener relación con el proceso principal de su proyecto. Por ejemplo, si fuese consultar una reservación de hotel: Cabecera de reservación, detalle de cuartos por reservación y detalle de personas que van a ubicarse por cada cuarto en la reservación.

// array que simula los datos de todos los alumnos
const alumnos = [
  { id: 1, nombre: "Alex Santacruz" },
  { id: 2, nombre: "Ximena Maldonado" },
  { id: 3, nombre: "Mickey Torres" },
];

// array que simula los datos de todos las asignaturas
const asignaturas = [
  { id: 1, nombre: "Aplicaciones Web II" },
  { id: 2, nombre: "Mineria de Datos" },
  { id: 3, nombre: "Ingeníeria de Software II" },
];

// array que simula los datos de todos los parametros para la nota final
const parametros = [
  { id: 1, nombre: "Actuacion", porcentaje: 0.1 },
  { id: 2, nombre: "Trabajo Autonomo", porcentaje: 0.25 },
  { id: 3, nombre: "Trabajo Practico", porcentaje: 0.3 },
  { id: 4, nombre: "Acreditacion", porcentaje: 0.35 },
];

// array que simula los datos de todos las tareas
const tareas = [
  {
    id: 1,
    nombre: "Informe Tecnico",
    idAlumno: 1,
    idAsignatura: 3,
    idParametro: 3,
    estado: false,
  },
  {
    id: 2,
    nombre: "Aplicacion en JS",
    idAlumno: 1,
    idAsignatura: 1,
    idParametro: 4,
    estado: false,
  },
  {
    id: 3,
    nombre: "Presentacion Orange",
    idAlumno: 1,
    idAsignatura: 2,
    idParametro: 1,
    estado: false,
  },
  {
    id: 4,
    nombre: "Investigación",
    idAlumno: 2,
    idAsignatura: 2,
    idParametro: 1,
    estado: true,
  },
  {
    id: 5,
    nombre: "Informe de Libro",
    idAlumno: 3,
    idAsignatura: 3,
    idParametro: 2,
    estado: true,
  },
  {
    id: 6,
    nombre: "Aplicacion en JS",
    idAlumno: 3,
    idAsignatura: 1,
    idParametro: 4,
    estado: false,
  },
];

/* FUNCIONES DE CONSULTA DE DATOS CON PROMESAS*/

// funcion que devuelve la informacion de un alumno por medio del id
const buscarAlumno = (id) => {
  return new Promise((resolve, reject) => {
    const alumno = alumnos.find((alumno) => alumno.id === id);
    if (!alumno) {
      const error = new Error();
      error.message = "Alumno no encontrado";

      reject(error);
    }
    resolve(alumno);
  });
};

// funcion que devuelve la informacion de una asignatura por medio del id
const buscarAsignatura = async (id) => {
  return new Promise((resolve, reject) => {
    const asignatura = asignaturas.find((asignatura) => asignatura.id === id);
    if (!asignatura) {
      const error = new Error();
      error.message = "Asignatura no encontrada";

      reject(error);
    }
    resolve(asignatura);
  });
};

// funcion que devuelve la informacion de un parametro por medio del id
const buscarParametro = async (id) => {
  return new Promise((resolve, reject) => {
    const parametro = parametros.find((parametro) => parametro.id === id);
    if (!parametro) {
      const error = new Error();
      error.message = "Parametro no encontrado";

      reject(error);
    }
    resolve(parametro);
  });
};

// funcion que devuelve la informacion de una tarea por medio del id
const buscarTarea = (id) => {
  return new Promise((resolve, reject) => {
    const tarea = tareas.find((tarea) => tarea.id === id);
    if (!tarea) {
      const error = new Error();
      error.message = "Tarea no encontrada";

      reject(error);
    }
    resolve(tarea);
  });
};

// funcion que devuelve una coleccion de tareas por medio del id del alumno
const buscarTareaPorAlumno = (idAlumno) => {
  return new Promise((resolve, reject) => {
    const datos = tareas.filter((tarea) => tarea.idAlumno === idAlumno);
    if (datos.length === 0) {
      const error = new Error();
      error.message = "Alumno sin tareas";

      reject(error);
    }
    resolve(datos);
  });
};

/* FUNCIONES PRINCIPALES QUE HACEN USO DE ASYNC Y AWAIT PARA TRABAJAR CON FUNCIONES QUE RETORNAN PROMESAS */

// funcion principal que nos detalla las tareas pendientes de un alumno
async function tareasPendientes(idAlumno) {
  try {
    const datosTareas = await buscarTareaPorAlumno(idAlumno);
    const alumno = await buscarAlumno(idAlumno);
    const pendientes = datosTareas.filter((tarea) => !tarea.estado);
    if (pendientes.length > 0) {
      console.log(`${alumno.nombre} tiene las siguientes Tareas Pendientes:`);
      console.table(pendientes, ["nombre"]); // mostramos una tabla por consola con los nombres de las tares pendientes del alumno
      for (let i = 0; i < pendientes.length; i++) {
        const parametro = await buscarParametro(pendientes[i].idParametro);
        const asignatura = await buscarAsignatura(pendientes[i].idAsignatura);
        console.log(
          `- ${pendientes[i].nombre} | ${asignatura.nombre} | ${
            parametro.nombre
          } | ${parametro.porcentaje * 100}% de la nota final`
        );
      }
    } else {
      console.log(`${alumno.nombre} no tiene tareas pendientes`);
    }
  } catch (error) {
    console.log(error.message);
  }
}

tareasPendientes(1);

// funcion principal que nos detalla la informacion de una tarea en particular
async function detalleTareas(idTarea) {
  try {
    const tarea = await buscarTarea(idTarea);
    const alumno = await buscarAlumno(tarea.idAlumno);
    const asignatura = await buscarAsignatura(tarea.idAsignatura);
    const parametro = await buscarParametro(tarea.idParametro);
    let estado; // declaramos una variable donde se almacenara el valor booleano del estado de la tarea mediante una cadena de caracteres
    if (tarea.estado) {
      estado = "presentado";
    } else {
      estado = "pendiente";
    }

    // convertimos el porcentaje del parametro en un numero entero
    const porcentaje = parseFloat(parametro.porcentaje * 100);

    // guardamos todos los valores de la tarea en un objeto que se almacena en un array para poder mostrarlo como tabla por consola
    const datos = [
      {
        tarea: tarea.nombre,
        alumno: alumno.nombre,
        asignatura: asignatura.nombre,
        parametro: parametro.nombre,
        porcentaje: `${porcentaje} %`,
        estado: estado,
      },
    ];
    console.table(datos);

    console.log(
      `Estudiante *${alumno.nombre}* de la asignatura *${asignatura.nombre}* tiene la tarea *${tarea.nombre}* que equivale al parametro de *${parametro.nombre}* en estado '${estado}' que equivale al ${porcentaje}% de la nota final`
    );
  } catch (error) {
    console.log(error.message);
  }
}

// detalleTareas(4);

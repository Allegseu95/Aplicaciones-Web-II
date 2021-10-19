let prueba = "5";

const persona = {
  nombre: "Alex",
  apellido: "Santacruz",
  esEstudiante: true,
  prueba: prueba,
  getNombreCompleto() {
    return `${this.nombre} ${this.apellido}`;
  },
  geolocalizacion: {
    lat: 123.31,
    lng: 23.99,
  },
};

// console.log(persona.getNombreCompleto());
// console.log(persona);

// const estudiante = { ...persona, nombre: "David" };
// // estudiante.nombre = "David";

// console.log(persona);
// console.log(estudiante);

// function mostrarDatos(parametro) {
//   console.log(parametro.nombre);
//   console.log(parametro.geolocalizacion.lat);
//   console.log(parametro.geolocalizacion.lng);
// }

function mostrarDatos({ nombre, geolocalizacion: { lat, lng } }) {
  console.log(nombre);
  console.log(lat);
  console.log(lng);
}
mostrarDatos(persona);

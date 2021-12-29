class HomeService {
  index() {
    return {
      message: "Bienvenido al APIREST de Tareas de la FACCI",
      curso: "Sexto Nivel A",
      autores: [
        { nombre: "Alex Santacruz" },
        { nombre: "Darel Blondet" },
        { nombre: "Nicole Baque" },
        { nombre: "Dayanara Burgasi" },
        { nombre: "Johan Intriago" },
      ],
      docenteTutor: "Ing. John Cevallos Macías, Mg.",
    };
  }
}

module.exports = HomeService;

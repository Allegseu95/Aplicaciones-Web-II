require("../db/index");
const { Noticias } = require("../models/index");

// funcion que consulta todos los registros del modelo Noticias de la base de datos
module.exports = function (req, res) {
  Noticias.find((err, result) => {
    if (err) {
      console.log(err);
    }

    let data = [];

    // se recorre toda el array que devuelve la consulta y se agrega a otro array con una estructura mas limpia para ser mostrada ante el usuario
    result.forEach((element) => {
      data.push({ title: element.titulo, link: element.enlace });
    });

    res.send(data);
  });
};

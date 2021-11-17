const express = require("express");
const router = express.Router();

// llamamos a las funciones de consulta
const obtener = require("../consultas/index");

router.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/public/index.html");
});

router.get("/materias", (req, res) => {
  res.sendFile(process.cwd() + "/public/materias.html");
});

router.get("/niveles", (req, res) => {
  res.sendFile(process.cwd() + "/public/nivel.html");
});

router.get("/carreras", (req, res) => {
  res.sendFile(process.cwd() + "/public/carrera.html");
});

// 2.- Crear una ruta GET que consulte datos de su base de datos en MongoDB con las noticias obtenidas desde el portal de CNN en la práctica anterior.

router.get("/consulta", obtener);

module.exports = router;

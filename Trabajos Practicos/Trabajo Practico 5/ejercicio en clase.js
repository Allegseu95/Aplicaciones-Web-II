const express = require("express");
const cors = require("cors");

const app = express();

// confirguracion
const PORT = 3000;
app.set("port", process.env.PORT || PORT);

let estudiantes = [];

app.use("/public", express.static(__dirname + "/public"));
app.use(cors()).use(express.json());

// /apifacci/v1/estudiantes/individual&cedula=1234567890
// /estudiantes GET, POST, PATCH, PUT, DELETE

app.get("/", (req, res) => {
  res.status(200).send(estudiantes);
});

app.get("/:cedula", (req, res) => {
  const { cedula } = req.params;
  let resultado = estudiantes.filter((p) => p.cedula === cedula);
  if (resultado.length > 0) {
    res.status(200).send(resultado[0]);
  } else {
    res.status(404).send({
      mensaje: "No se puede encontrar el estudiante con ese numero de cedula",
    });
  }
});

app.post("/", (req, res) => {
  const { body } = req;
  estudiantes.push(body);
  res.status(200).send({
    mensaje: "dato insertado correctamente",
    respuesta: body,
  });
});

app.put("/", (req, res) => {
  const { cedula, nombre, curso } = req.body;
  let estudiantes = estudiantes.filter((p) => p.cedula === cedula)[0];
  estudiante.nombre = nombre;
  estudiante.curso = curso;
  res.status(200).send({
    mensaje: "dato modificado correctamente",
    respuesta: estudiante,
  });
});

app.delete("/:cedula", (req, res) => {
  const { cedula } = req.params;
  let resultado = estudiantes.filter((p) => p.cedula !== cedula);
  res.status(200).send({
    mensaje: "Estudiante eliminado correctamente",
  });
});

app.listen(app.get("port"), (req, res) => {
  console.log("Servidor corriendo en puerto: " + app.get("port"));
});

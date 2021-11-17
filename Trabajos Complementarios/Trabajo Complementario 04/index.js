const express = require("express");
const cors = require("cors");

const app = express();

// configuracion
const PUERTO = 3000;
app.set("port", process.env.PORT || PUERTO);

// middlewares

app.use(express.static("public"));
app.use(express.static(__dirname + "/public"));

app.use(cors()).use(express.json());

// configuracion de las rutas api
app.use("/api", require("./routes/index"));

// middleware para rutas no configuradas
app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + "/public/404.html");
});

app.listen(app.get("port"), (req, res) => {
  console.log("Servidor corriendo en puerto: " + app.get("port"));
});

const fs = require("fs");
const http = require("http");

const express = require("express");
const cors = require("cors");
const path = require("path");

const PUERTO = 8000;
const inicio = fs.readFileSync("./index.html");
const acercade = fs.readFileSync("./about.html");
const error = fs.readFileSync("./error.html");

const urlError = path.join(__dirname, "./error.html");

const app = express();
app.use(cors()).use(express.json());

app.get("/", funcionx);

app.get("/about", (req, res) => {
  // res.write(acercade);
  res.send(200).send({
    respuesta: "gracias",
  });
});

app.use((req, res, next) => {
  res.status(400).sendFile(urlError);
});

function funcionx(req, res) {
  res.write(inicio);
  res.end();
}

app.listen(PUERTO, () => {
  console.log(`Servidor ejecutando en el puerto ${PUERTO}`);
});

// http
//   .createServer((req, res) => {
//     const { url } = req;

//     if (url === "/") {
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.write(inicio);
//     } else if (url === "/about") {
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.write(acercade);
//     } else {
//       res.writeHead(404, { "Content-Type": "text/html" });
//       res.write(error);
//     }
//   })
//   .listen(PUERTO, () => {
//     console.log(`Servidor en puerto http://localhost:${PUERTO}`);
//   });

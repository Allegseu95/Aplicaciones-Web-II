const express = require("express");
const app = express();

const response = {
  data: [],
  services: "Book service",
  arquitectura: "Microservicios",
};

app.use((req, res, next) => {
  response.data = [];
  next();
});

app.get("/api/v2/books", (req, res) => {
  response.data.push(
    "javascript guia definitiva",
    "Patrones JavaScript",
    "Antipatrones STUPI"
  );
  console.log("get book data");
  return res.send(response);
});

module.exports = app;

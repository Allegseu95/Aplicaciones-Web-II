const express = require("express");
const app = express();

const response = {
  data: [],
  services: "All services",
  arquitectura: "Monolithic",
};

app.use((req, res, next) => {
  response.data = [];
  next();
});

// usuarios
app.get("api/v1/users", (req, res) => {
  response.data.push("Alex", "Sara", "Ayme");
  return res.send(response);
});

// libros
app.get("api/v1/books", (req, res) => {
  response.data.push(
    "javascript guia definitiva",
    "Patrones JavaScript",
    "Antipatrones STUPID"
  );
  return res.send(response);
});

// carros
app.get("api/v1/cars", (req, res) => {
  response.data.push("Versa", "BMW", "Kia");
  return res.send(response);
});

module.exports = app;

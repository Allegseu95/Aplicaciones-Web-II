const express = require("express");
const app = express();

const response = {
  data: [],
  services: "Monolithic Service",
  architecture: "Monolithic",
};

app.use((req, res, next) => {
  response.data = [];
  next();
});

// usuarios
app.get("api/v1/users", (req, res) => {
  response.data.push("Marluan", "Jeffrey", "Alexis");
  return res.send(response);
});

// libros
app.get("api/v1/books", (req, res) => {
  response.data.push(
    "The clean coder",
    "The pragmatic progammer",
    "Soft skills"
  );
  return res.send(response);
});

// carros
app.get("api/v1/cars", (req, res) => {
  response.data.push("Ferrari", "Fiat", "BMW");
  return res.send(response);
});

module.exports = app;

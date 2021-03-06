const express = require("express");
const app = express();

const response = {
  data: [],
  services: "Car service",
  arquitectura: "Microservicios",
};

app.use((req, res, next) => {
  response.data = [];
  next();
});

app.get("/api/v2/cars", (req, res) => {
  response.data.push("Versa", "BMW", "Kia");
  console.log("get car data");
  return res.send(response);
});

module.exports = app;

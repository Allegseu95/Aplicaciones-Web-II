const express = require("express");
const app = express();

const response = {
  data: [],
  services: "User service",
  arquitectura: "Microservicios",
};

app.use((req, res, next) => {
  response.data = [];
  next();
});

app.get("/api/v2/users", (req, res) => {
  response.data.push("Alex", "Sara", "Ayme");
  console.log("get user data");
  return res.send(response);
});

module.exports = app;

const mongoose = require("mongoose");
const { MONGO_URI } = require("../config/index");

module.exports = {
  conexion: mongoose
    .connect(MONGO_URI)
    .then(() => {
      console.log("conexion exitosa");
    })
    .catch((er) => {
      console.log(er);
    }),
};

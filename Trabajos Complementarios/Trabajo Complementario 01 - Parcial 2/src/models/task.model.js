const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema(
  {
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    asignatura: { type: String, required: true },
    paralelo: { type: String, required: true },
    carrera: { type: String, required: true },
    parametro: { type: String, required: true },
    ponderacion: { type: Number, required: true },
    fechaEntrega: { type: Date, required: true },
  },
  {
    timestamps: { createdAt: true, updatedAt: true },
  }
);

module.exports = mongoose.model("Task", taskSchema);

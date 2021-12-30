const mongoose = require("mongoose");
const { Schema } = mongoose;

const studentSchema = new Schema(
  {
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    cedula: { type: String, required: true },
    carrera: { type: String, required: true },
    telefono: { type: String, required: true },
    fecha_nacimiento: { type: Date, required: true },
  },
  {
    timestamps: { createdAt: true, updatedAt: true },
  }
);

module.exports = mongoose.model("Student", studentSchema);

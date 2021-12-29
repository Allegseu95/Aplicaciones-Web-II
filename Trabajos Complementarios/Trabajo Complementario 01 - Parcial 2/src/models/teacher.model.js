const mongoose = require("mongoose");
const { Schema } = mongoose;

const teacherSchema = new Schema(
  {
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    cedula: { type: String, required: true },
    titulos: { type: String, required: true },
    telefono: { type: String, required: true },
    cursos_asignados: { type: String, required: true },
    fecha_nacimiento: { type: Date, required: true },
  },
  {
    timestamps: { createdAt: true, updatedAt: true },
  }
);

module.exports = mongoose.model("Teacher", teacherSchema);

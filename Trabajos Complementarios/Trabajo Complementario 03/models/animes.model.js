const mongoose = require("mongoose");
const { Schema } = mongoose;

const AnimeSchema = new Schema(
  {
    titulo: { type: String },
    capitulo: { type: String },
    enlace: { type: String },
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

module.exports = mongoose.model("Animes", AnimeSchema);

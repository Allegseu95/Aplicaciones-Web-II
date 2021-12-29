const { Router } = require("express");
const { check } = require("express-validator");

const {
  crearCategoria,
  obtenerCategoria,
  obtenerCategorias,
  actualizarCategoria,
  eliminarCategoria,
} = require("../controllers").Categoria;
const { validarCampos } = require("../middlewares");

const router = Router();

router.get("/", obtenerCategorias);
router.get(
  "/:id",
  check("id", "Este no es un id de MongoDB VALIDO").isMongoId(),
  obtenerCategoria
);
router.post(
  "/",
  check("nombre", "El nombre es requerido").not().isEmpty(),
  validarCampos,
  crearCategoria
);
router.put("/:id", actualizarCategoria);
router.delete(
  "/:id",
  check("id", "Debe ser un id de mongo Valido").isMongoId(),
  eliminarCategoria
);

module.exports = router;

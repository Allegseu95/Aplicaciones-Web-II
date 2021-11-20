const { Router } = require("express");

const { check } = require("express-validator");

const {
  crearProducto,
  obtenerProducto,
  obtenerProductos,
  actualizarProducto,
  eliminarProducto,
} = require("../controllers").Producto;

const { validarCampos } = require("../middlewares");

const router = Router();

router.get("/", obtenerProductos);

router.get(
  "/:id",
  [check("id", "Este no es un id de MongoDB VALIDO").isMongoId()],
  obtenerProducto
);

router.post(
  "/",
  [check("nombre", "El nombre es requerido").not().isEmpty(), validarCampos],
  crearProducto
);

router.put("/:id", actualizarProducto);

router.delete(
  "/:id",
  [check("id", "Debe ser un id de mongo Valido").isMongoId()],
  eliminarProducto
);

module.exports = router;

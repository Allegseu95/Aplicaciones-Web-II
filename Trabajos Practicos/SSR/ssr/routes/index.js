var express = require("express");
var router = express.Router();
const axios = require("axios");

/* GET home page. */
router.get("/", function (req, res, next) {
  // res.render("index", { title: "Prueba" });
  axios
    .get("http://localhost:5000/v1/inventario/api/productos")
    .then((result) => {
      console.log(result.data.productos);
      res.render("index", { productos: result.data.productos });
    });
});

router.get("/producto/nuevo", (req, res, next) => {
  res.render("productoForm", {});
});

router.get("/producto/modificar/:id", (req, res, next) => {
  axios
    .get(`http://localhost:5000/v1/inventario/api/productos/${req.params.id}`)
    .then((result) => res.render("productoForm", { producto: result.data }));
});

router.get("/producto/eliminar/:id", (req, res, next) => {
  axios
    .delete(
      `http://localhost:5000/v1/inventario/api/productos/${req.params.id}`
    )
    .then((respuesta) => {
      res.redirect("/");
    });
});
module.exports = router;

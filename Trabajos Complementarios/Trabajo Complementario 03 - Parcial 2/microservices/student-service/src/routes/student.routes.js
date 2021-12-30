const { Router } = require("express");

module.exports = function ({ StudentController }) {
  const router = Router();

  router.get("", StudentController.getAll);
  router.get("/:studentId", StudentController.get);
  router.get("/buscar/:cedula", StudentController.getStudentByCedula);
  router.post("", StudentController.create);
  router.patch("/:studentId", StudentController.update);
  router.delete("/:studentId", StudentController.delete);
  return router;
};

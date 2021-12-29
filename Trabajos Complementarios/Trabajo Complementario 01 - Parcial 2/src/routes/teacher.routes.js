const { Router } = require("express");

module.exports = function ({ TeacherController }) {
  const router = Router();

  router.get("", TeacherController.getAll);
  router.get("/:teacherId", TeacherController.get);
  router.get("/buscar/:cedula", TeacherController.getTeacherByCedula);
  router.post("", TeacherController.create);
  router.patch("/:teacherId", TeacherController.update);
  router.delete("/:teacherId", TeacherController.delete);
  return router;
};

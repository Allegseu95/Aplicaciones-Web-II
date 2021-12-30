const { Router } = require("express");

module.exports = function ({ TaskController }) {
  const router = Router();

  router.get("", TaskController.getAll);
  router.get("/:taskId", TaskController.get);
  router.get("/buscar/:nombre", TaskController.getTaskByName);
  router.post("", TaskController.create);

  router.patch("/:taskId", TaskController.update);
  router.delete("/:taskId", TaskController.delete);
  return router;
};

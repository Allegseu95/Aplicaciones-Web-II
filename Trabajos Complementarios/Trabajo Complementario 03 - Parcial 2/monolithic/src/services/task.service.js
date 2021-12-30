const BaseService = require("./base.service");
let _taskRepository = null;

class TaskService extends BaseService {
  constructor({ TaskRepository }) {
    super(TaskRepository);
    _taskRepository = TaskRepository;
  }

  async getTaskByName(nombre) {
    // return await _taskRepository.getTaskByName(nombre);


    if (!nombre) {
      const error = new Error();
      error.status = 400;
      error.message = "Se debe enviar el nombre como parametro";
      throw error;
    }

    const currentEntity = await _taskRepository.getTaskByName(nombre);

    if (!currentEntity) {
      const error = new Error();
      error.status = 404;
      error.message = "Entidad no encontrada!";
      throw error;
    }

    return currentEntity;
  }
}

module.exports = TaskService;

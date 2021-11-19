const BaseService = require("./base.service");
let _taskRepository = null;

class TaskService extends BaseService {
  constructor({ TaskRepository }) {
    super(TaskRepository);
    _taskRepository = TaskRepository;
  }

  async getTaskByName(name) {
    return await _taskRepository.getTaskByName(name);
  }
}

module.exports = TaskService;

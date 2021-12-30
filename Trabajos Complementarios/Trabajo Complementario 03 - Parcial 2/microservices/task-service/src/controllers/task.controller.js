let _taskService = null;

class TaskController {
  constructor({ TaskService }) {
    _taskService = TaskService;
  }

  async get(req, res) {
    const { taskId } = req.params;
    const task = await _taskService.get(taskId);
    return res.send(task);
  }

  async getTaskByName(req, res) {
    const { nombre } = req.params;
    const task = await _taskService.getTaskByName(nombre);
    return res.send(task);
  }

  async getAll(req, res) {
    const { pageSize, pageNum } = req.query;
    const tasks = await _taskService.getAll(pageSize, pageNum);
    return res.send(tasks);
  }

  async create(req, res) {
    const { body } = req;
    const createdTask = await _taskService.create(body);
    return res.status(201).send(createdTask);
  }

  async update(req, res) {
    const { body } = req;
    const { taskId } = req.params;
    const updatedTask = await _taskService.update(taskId, body);
    return res.send(updatedTask);
  }

  async delete(req, res) {
    const { taskId } = req.params;
    const deletedTask = await _taskService.delete(taskId);
    return res.send(deletedTask);
  }
}

module.exports = TaskController;

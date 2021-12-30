const BaseRepository = require("./base.repository");
let _task = null;

class TaskRepository extends BaseRepository {
  constructor({ Task }) {
    super(Task);
    _task = Task;
  }

  async getTaskByName(nombre) {
    return await _task.findOne({ nombre: nombre });
  }
}

module.exports = TaskRepository;

const BaseRepository = require("./base.repository");
let _task = null;

class TaskRepository extends BaseRepository {
  constructor({ Task }) {
    super(Task);
    _task = Task;
  }

  async getTaskByName(name) {
    return await _task.findOne({ name });
  }
}

module.exports = TaskRepository;

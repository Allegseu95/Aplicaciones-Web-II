let _teacherService = null;

class TeacherController {
  constructor({ TeacherService }) {
    _teacherService = TeacherService;
  }

  async get(req, res) {
    const { teacherId } = req.params;
    const teacher = await _teacherService.get(teacherId);
    return res.send(teacher);
  }

  async getTeacherByCedula(req, res) {
    const { cedula } = req.params;
    const teacher = await _teacherService.getTeacherByCedula(cedula);
    return res.send(teacher);
  }

  async getAll(req, res) {
    const { pageSize, pageNum } = req.query;
    const teachers = await _teacherService.getAll(pageSize, pageNum);
    return res.send(teachers);
  }

  async create(req, res) {
    const { body } = req;
    const createdteacher = await _teacherService.create(body);
    return res.status(201).send(createdteacher);
  }

  async update(req, res) {
    const { body } = req;
    const { teacherId } = req.params;
    const updatedteacher = await _teacherService.update(teacherId, body);
    return res.send(updatedteacher);
  }

  async delete(req, res) {
    const { teacherId } = req.params;
    const deletedTeacher = await _teacherService.delete(teacherId);
    return res.send(deletedTeacher);
  }
}

module.exports = TeacherController;

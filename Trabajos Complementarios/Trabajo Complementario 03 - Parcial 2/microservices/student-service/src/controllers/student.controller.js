let _studentService = null;

class StudentController {
  constructor({ StudentService }) {
    _studentService = StudentService;
  }

  async get(req, res) {
    const { studentId } = req.params;
    const student = await _studentService.get(studentId);
    return res.send(student);
  }

  async getStudentByCedula(req, res) {
    const { cedula } = req.params;
    const student = await _studentService.getStudentByCedula(cedula);
    return res.send(student);
  }

  async getAll(req, res) {
    const { pageSize, pageNum } = req.query;
    const students = await _studentService.getAll(pageSize, pageNum);
    return res.send(students);
  }

  async create(req, res) {
    const { body } = req;
    const createdStudent = await _studentService.create(body);
    return res.status(201).send(createdStudent);
  }

  async update(req, res) {
    const { body } = req;
    const { studentId } = req.params;
    const updatedStudent = await _studentService.update(studentId, body);
    return res.send(updatedStudent);
  }

  async delete(req, res) {
    const { studentId } = req.params;
    const deletedStudent = await _studentService.delete(studentId);
    return res.send(deletedStudent);
  }
}

module.exports = StudentController;

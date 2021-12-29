const BaseRepository = require("./base.repository");
let _student = null;

class StudentRepository extends BaseRepository {
  constructor({ Student }) {
    super(Student);
    _student = Student;
  }
  async getStudentByCedula(cedula) {
    return await _student.findOne({ cedula: cedula });
  }
}

module.exports = StudentRepository;

const BaseService = require("./base.service");
let _studentRepository = null;

class StudentService extends BaseService {
  constructor({ StudentRepository }) {
    super(StudentRepository);
    _studentRepository = StudentRepository;
  }

  async getStudentByCedula(cedula) {
    return await _studentRepository.getStudentByCedula(cedula);
  }
}

module.exports = StudentService;

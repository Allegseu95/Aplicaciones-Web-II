const BaseService = require("./base.service");
let _teacherRepository = null;

class TeacherService extends BaseService {
  constructor({ TeacherRepository }) {
    super(TeacherRepository);
    _teacherRepository = TeacherRepository;
  }

  async getTeacherByCedula(cedula) {
    return await _teacherRepository.getTeacherByCedula(cedula);
  }
}

module.exports = TeacherService;

const BaseRepository = require("./base.repository");
let _teacher = null;

class TeacherRepository extends BaseRepository {
  constructor({ Teacher }) {
    super(Teacher);
    _teacher = Teacher;
  }
  async getTeacherByCedula(cedula) {
    return await _teacher.findOne({ cedula:cedula });
  }
}

module.exports = TeacherRepository;

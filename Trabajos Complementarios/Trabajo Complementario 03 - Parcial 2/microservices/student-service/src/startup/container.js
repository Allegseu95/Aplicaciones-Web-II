const { createContainer, asClass, asValue, asFunction } = require("awilix");

//configuracion

const config = require("../config");
const app = require(".");

//servicios
const { StudentService } = require("../services");

//controladores
const { StudentController } = require("../controllers");

//rutas
const { StudentRoutes } = require("../routes/index.routes");

const Routes = require("../routes");

// modelos
const { Student } = require("../models");

// repositorios
const { StudentRepository } = require("../repositories");

const container = createContainer();

container
  .register({
    //configuracion
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config),
  })
  .register({
    //servicios
    StudentService: asClass(StudentService).singleton(),
  })
  .register({
    //controladores
    StudentController: asClass(
      StudentController.bind(StudentController)
    ).singleton(),
  })
  .register({
    //rutas
    StudentRoutes: asFunction(StudentRoutes).singleton(),
  })
  .register({
    //modelos
    Student: asValue(Student),
  })
  .register({
    // repositorios
    StudentRepository: asClass(StudentRepository).singleton(),
  });

module.exports = container;

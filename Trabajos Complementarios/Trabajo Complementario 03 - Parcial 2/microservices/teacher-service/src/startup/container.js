const { createContainer, asClass, asValue, asFunction } = require("awilix");

//configuracion

const config = require("../config");
const app = require(".");

//servicios
const { TeacherService } = require("../services");

//controladores
const { TeacherController } = require("../controllers");

//rutas
const { TeacherRoutes } = require("../routes/index.routes");

const Routes = require("../routes");

// modelos
const { Teacher } = require("../models");

// repositorios
const { TeacherRepository } = require("../repositories");

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

    TeacherService: asClass(TeacherService).singleton(),
  })
  .register({
    //controladores

    TeacherController: asClass(
      TeacherController.bind(TeacherController)
    ).singleton(),
  })
  .register({
    //rutas

    TeacherRoutes: asFunction(TeacherRoutes).singleton(),
  })
  .register({
    //modelos

    Teacher: asValue(Teacher),
  })
  .register({
    // repositorios

    TeacherRepository: asClass(TeacherRepository).singleton(),
  });

module.exports = container;

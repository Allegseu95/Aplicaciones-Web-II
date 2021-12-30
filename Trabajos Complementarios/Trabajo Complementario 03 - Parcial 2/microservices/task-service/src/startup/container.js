const { createContainer, asClass, asValue, asFunction } = require("awilix");

//configuracion

const config = require("../config");
const app = require(".");

//servicios
const { TaskService } = require("../services");

//controladores
const { TaskController } = require("../controllers");

//rutas
const { TaskRoutes } = require("../routes/index.routes");

const Routes = require("../routes");

// modelos
const { Task } = require("../models");

// repositorios
const { TaskRepository } = require("../repositories");

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
    TaskService: asClass(TaskService).singleton(),
  })
  .register({
    //controladores
    TaskController: asClass(TaskController.bind(TaskController)).singleton(),
  })
  .register({
    //rutas
    TaskRoutes: asFunction(TaskRoutes).singleton(),
  })
  .register({
    //modelos
    Task: asValue(Task),
  })
  .register({
    // repositorios
    TaskRepository: asClass(TaskRepository).singleton(),
  });

module.exports = container;

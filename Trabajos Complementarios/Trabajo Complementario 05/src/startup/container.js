const { createContainer, asClass, asValue, asFunction } = require("awilix");

//config

const config = require("../config");
const app = require(".");

//servicios
const { HomeService, TaskService } = require("../services");
//controladores
const { HomeController, TaskController } = require("../controllers");
//rutas
const { HomeRoutes, TaskRoutes } = require("../routes/index.routes");
const Routes = require("../routes");

// modelos
const { Task } = require("../models");

// repositorios
const { TaskRepository } = require("../repositories");

const container = createContainer();

container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config),
  })
  .register({
    HomeService: asClass(HomeService).singleton(),
    TaskService: asClass(TaskService).singleton(),
  })
  .register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
    TaskController: asClass(TaskController.bind(TaskController)).singleton(),
  })
  .register({
    HomeRoutes: asFunction(HomeRoutes).singleton(),
    TaskRoutes: asFunction(TaskRoutes).singleton(),
  })
  .register({
    Task: asValue(Task),
  })
  .register({
    TaskRepository: asClass(TaskRepository).singleton(),
  });

module.exports = container;

const { createContainer, asClass, asValue, asFunction } = require("awilix");

//configuracion

const config = require("../config");
const app = require(".");

//servicios
const {
  HomeService,
  TaskService,
  StudentService,
  TeacherService,
} = require("../services");

//controladores
const {
  HomeController,
  TaskController,
  StudentController,
  TeacherController,
} = require("../controllers");

//rutas
const {
  HomeRoutes,
  TaskRoutes,
  StudentRoutes,
  TeacherRoutes,
} = require("../routes/index.routes");

const Routes = require("../routes");

// modelos
const { Task, Student, Teacher } = require("../models");

// repositorios
const {
  TaskRepository,
  StudentRepository,
  TeacherRepository,
} = require("../repositories");

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
    HomeService: asClass(HomeService).singleton(),
    TaskService: asClass(TaskService).singleton(),
    StudentService: asClass(StudentService).singleton(),
    TeacherService: asClass(TeacherService).singleton(),
  })
  .register({
    //controladores
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
    TaskController: asClass(TaskController.bind(TaskController)).singleton(),
    StudentController: asClass(
      StudentController.bind(StudentController)
    ).singleton(),
    TeacherController: asClass(
      TeacherController.bind(TeacherController)
    ).singleton(),
  })
  .register({
    //rutas
    HomeRoutes: asFunction(HomeRoutes).singleton(),
    TaskRoutes: asFunction(TaskRoutes).singleton(),
    StudentRoutes: asFunction(StudentRoutes).singleton(),
    TeacherRoutes: asFunction(TeacherRoutes).singleton(),
  })
  .register({
    //modelos
    Task: asValue(Task),
    Student: asValue(Student),
    Teacher: asValue(Teacher),
  })
  .register({
    // repositorios
    TaskRepository: asClass(TaskRepository).singleton(),
    StudentRepository: asClass(StudentRepository).singleton(),
    TeacherRepository: asClass(TeacherRepository).singleton(),
  });

module.exports = container;

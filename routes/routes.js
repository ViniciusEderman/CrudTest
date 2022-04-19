const routes = require("express").Router();
const TaskController = require("../controller/TaskController");

routes.get("/home", TaskController.getAllTasks);
routes.post("/crate", TaskController.createTask);

module.exports = routes;

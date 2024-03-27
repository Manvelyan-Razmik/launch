const express = require('express');

const planetsRouter = express.Router();
const planetsController = require('../controller/planets.controller');

planetsRouter.get('/', planetsController.getAllPlanets);
planetsRouter.post('/', planetsController.addNewPlanets);
planetsRouter.delete("/:id", planetsController.deletePlanetsById)
module.exports = planetsRouter;
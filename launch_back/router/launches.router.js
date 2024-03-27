const express = require("express");

const launchesRouter = express.Router();
const {getAllLaunches , addNewLaunches, httpAbortLaunch } = require("../controller/launches.controller");


// launches.get()
launchesRouter.get('/', getAllLaunches);
// launchesRouter.get('/:id', getLaunchesById);
launchesRouter.post('/', addNewLaunches);
// launchesRouter.delete('/:id', deleteLaunches)
launchesRouter.delete('/:id',httpAbortLaunch)

module.exports = launchesRouter
    
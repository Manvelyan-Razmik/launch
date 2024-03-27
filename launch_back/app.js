const express = require("express");
const planetsRouter = require("./router/planets.router");
const launchesRouter = require("./router/launches.router");
const marketRouter = require("./router/market.router");
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
    methods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE'],
    allowedHeaders: ['Authorization', 'Content-Type', 'Origin'],
    credentials: true,
    optionsSuccessStatus: 200,
    maxAge: -1
  }));

app.use('/planets', planetsRouter);
app.use("/launches", launchesRouter);
app.use("/market",marketRouter);
module.exports = app;

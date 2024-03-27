const express = require("express");
const marketRouter = express.Router();                        ///////????Router
const { getAllItems, addNewItems, getMarketById, deleteMarket } = require("../controller/market.controller")

marketRouter.get('/', getAllItems);
marketRouter.post("/", addNewItems);
marketRouter.get('/:id', getMarketById);
marketRouter.delete('/:id', deleteMarket)

module.exports = marketRouter;  
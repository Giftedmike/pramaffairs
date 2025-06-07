const express = require("express");
const { orderProduct } = require("../controllers/order.controller");
let orderRouter = express.Router();

orderRouter.post("/order", orderProduct);


module.exports = orderRouter;
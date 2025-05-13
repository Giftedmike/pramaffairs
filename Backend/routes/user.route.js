
const express = require("express");
const { registerUser } = require("../controllers/user.controller");
let userRouter = express.Router();

userRouter.post("/signup", registerUser);

module.exports = userRouter;
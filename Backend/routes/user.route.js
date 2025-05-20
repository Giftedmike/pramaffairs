
const express = require("express");
const { registerUser, signInUser } = require("../controllers/user.controller");
let userRouter = express.Router();

userRouter.post("/usersignup", registerUser);
userRouter.post("/usersignin", signInUser);

module.exports = userRouter;
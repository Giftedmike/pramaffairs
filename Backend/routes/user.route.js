
const express = require("express");
const { registerUser, signInUser, verifyToken } = require("../controllers/user.controller");
let userRouter = express.Router();

userRouter.post("/usersignup", registerUser);
userRouter.post("/usersignin", signInUser);
userRouter.get("/dashboard", verifyToken);
userRouter.get("/admindashboard", verifyToken);

module.exports = userRouter;
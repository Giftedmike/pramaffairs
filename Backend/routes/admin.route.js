const express = require("express");
const { registerAdmin, signInAdmin } = require("../controllers/admin.controller");
let adminRouter = express.Router();

adminRouter.post("/adminsignup", registerAdmin);
adminRouter.post("/adminsignin", signInAdmin);

module.exports = adminRouter;

const express = require("express");
const { registerAdmin } = require("../controllers/admin.controller");
let adminRouter = express.Router();

adminRouter.post("/signup", registerAdmin);

module.exports = adminRouter;

// Importations
const mongoose = require("mongoose");

// database schema
const user_signupSchema = mongoose.Schema({
  firstname: { type: String, Required: true },
  lastname: { type: String, Required: true },
  email: { type: String, Required: true },
  password: { type: String, Required: true },
});

// database model and export
module.exports = mongoose.model("user_signup", user_signupSchema);
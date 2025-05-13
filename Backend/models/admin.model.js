// Importations
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// database schema
const admin_signupSchema = mongoose.Schema({
  firstname: { type: String, Required: true },
  lastname: { type: String, Required: true },
  email: { type: String, Required: true },
  password: { type: String, Required: true },
});

let saltRound = 10;
admin_signupSchema.pre("save", function (next) {
  bcrypt.hash(this.password, saltRound, (err, hashedpassword) => {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      this.password = hashedpassword;
      next();
    }
  });
});

// database model and export
let adminModel = mongoose.model("admin_signups", admin_signupSchema);
module.exports = adminModel;

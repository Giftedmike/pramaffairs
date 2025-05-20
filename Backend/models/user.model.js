// Importations
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// database schema
const user_signupSchema = mongoose.Schema({
  firstname: { type: String, Required: true },
  lastname: { type: String, Required: true },
  email: { type: String, Required: true },
  password: { type: String, Required: true },
});

let saltRound = 10;
user_signupSchema.pre("save", function (next) {
  const user = this;

  bcrypt.hash(user.password, saltRound, (err, hashedpassword) => {
    if (err) {
      console.log(err);
      return next(err); 
    }
    user.password = hashedpassword;
    next(); 
  });
});

// Validating user password
user_signupSchema.methods.validatePassword = function (password, callback) {
  bcrypt.compare(password, this.password, (err, same) => {
    if (!err) {
      callback(err, same);
    } else {
      next();
    }
  });
};


// database model and export
let userModel = mongoose.model("user_signup", user_signupSchema);
module.exports = userModel;

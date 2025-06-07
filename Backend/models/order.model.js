// Importations
const mongoose = require("mongoose");

// database schema
const orderSchema = mongoose.Schema({
  packageprice: { type: String, Required: true },
  packagetype: { type: Number, Required: true },
  name: { type: Number, Required: true },
  officeaddress: { type: String, Required: true },
  orgnature: { type: String, Required: true },
  phoneno: { type: String, Required: true },
  email: { type: String, Required: true },
});

// database model and export
module.exports = mongoose.model("order", orderSchema);
// Importations
const mongoose = require("mongoose");

// database schema
const productSchema = mongoose.Schema({
  prodname: { type: String, Required: true },
  prodprice: { type: Number, Required: true },
  prodqty: { type: Number, Required: true },
  proddesc: { type: String, Required: true },
});

// database model and export
module.exports = mongoose.model("product", productSchema);
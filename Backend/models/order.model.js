// Importations
const mongoose = require("mongoose");

// database schema
const orderSchema = mongoose.Schema({
  packageType: { type: String, Required: true },
  entityType: { type: String, Required: true },
  entityName: { type: String, Required: true },
  address: { type: String, Required: true },
  organizationNature: { type: String, Required: true },
  phone: { type: Number, Required: true },
  email: { type: String, Required: true },
});



// database model and export
module.exports = mongoose.model("order", orderSchema);
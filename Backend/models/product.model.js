const mongoose = require("mongoose");

// database schema
const productSchema = mongoose.Schema({
  prodImage: { type: String, required: true },
  prodTitle: { type: String, required: true },
  prodInstruction: { type: String, required: true },
  prodlink: {
    type: String,
    validate: {
      validator: function (v) {
        return /^(https?:\/\/)[\w\-]+(\.[\w\-]+)+[/#?]?.*$/.test(v);
      },
      message: (props) => `${props.value} is not a valid URL!`,
    },
  },
});

// database model and export
module.exports = mongoose.model("Product", productSchema); // capitalized model name

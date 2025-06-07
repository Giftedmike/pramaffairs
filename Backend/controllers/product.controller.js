const prodModel = require("../models/product.model");


const registerProd = (req, res) => {
  console.log(req.body);
  let form = prodModel(req.body);
  form
    .save()
    .then(() => {
      res.send({ status: true, message: "Product Added successfully", token: token });

    })
    .catch((err) => {
      res.send({ status: false, message: "Data not saved successfully" });
    });
};

module.exports = { registerProd };
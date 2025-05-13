const adminModel = require("../models/admin.model");

const registerAdmin = (req, res) => {
  console.log(req.body);
  let form = adminModel(req.body);
  form
    .save()
    .then(() => {
      res.send({status:true,message:"Data saved successfully"});
    })
    .catch((err) => {
      res.send({status:false,message:"Data not saved successfully"});
    });
};

module.exports = { registerAdmin };

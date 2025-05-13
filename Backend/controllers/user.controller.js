const userModel = require("../models/user.model");

const registerUser = (req, res) => {
    console.log(req.body);
  let form = userModel(req.body);
  form
    .save()
    .then(() => {
      res.send({status:true,message:"Data saved successfully"})
    })
    .catch(() => {
      console.log("Data not saved");
      res.send({status:false,message:"Data not successfully saved"})
    });
};

module.exports = { registerUser };


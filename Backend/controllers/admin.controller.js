const adminModel = require("../models/admin.model");

const registerAdmin = (req, res) => {
  console.log(req.body);
  let form = adminModel(req.body);
  form
    .save()
    .then(() => {
      res.send({ status: true, message: "Data saved successfully" });
    })
    .catch((err) => {
      res.send({ status: false, message: "Data not saved successfully" });
    });
};

// user validation using email and password
const signInAdmin = (req, res) => {
  console.log(req.body);
  adminModel
    .findOne({ email: req.body.email })
    .then((response) => {
      console.log(response)
      if(response){
        console.log("Email exist")
        response.validatePassword(req.body.password, (err,same)=>{
          if(same){
            res.send({status:true, message:"Signed in successfully"})
          }else{
            res.send({status:false, message:"invalid credentials"})
          }
        })
      }else{
        res.send({status:true, message:"Invalid credentials"})
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { registerAdmin, signInAdmin };

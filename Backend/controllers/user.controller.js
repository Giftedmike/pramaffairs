const userModel = require("../models/user.model");

const registerUser = (req, res) => {
  console.log(req.body);
  let form = userModel(req.body);
  form
    .save()
    .then(() => {
      res.send({ status: true, message: "Data saved successfully" });
    })
    .catch(() => {
      console.log("Data not saved");
      res.send({ status: false, message: "Data not successfully saved" });
    });
}
// user validation using email and password
const signInUser = (req, res) => {
  console.log(req.body);
  userModel
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

module.exports = { registerUser, signInUser };

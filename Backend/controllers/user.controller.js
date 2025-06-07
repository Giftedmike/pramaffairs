const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv").config();;

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
            // Protected route using jwt
            let secret = process.env.SECRET
            let token = jwt.sign({email:req.body.email}, secret,{expiresIn:"1h"})
            console.log(token)
            res.send({status:true, message:"Signed in successfully", token})
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

function verifyToken(req, res, next) {
  const authHeader = req.headers['authorization'];

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(400).json({ message: 'Invalid token.' });
  }
}


module.exports = { registerUser, signInUser, verifyToken };

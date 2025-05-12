// Importations
const express = require("express");
const connectDB = require("./database");

// Initialization
const app = express()

// Connect to MongoDB
connectDB();

//Malware


// Port to start 
PORT = 5000;
app.listen(PORT, (err)=>{
    if (err){
        console.log(err)
    }else{
        console.log(`Application is listening at port ${PORT}`)
    }
});
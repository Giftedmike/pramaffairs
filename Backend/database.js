// Importations
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

// Connection to mongoDB

const connectDB = () => {
  return mongoose
    .connect(process.env.URI)
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((err) => {
      console.error("MongoDB connection failed:", err);
      process.exit(1);
    });
};

module.exports = connectDB;

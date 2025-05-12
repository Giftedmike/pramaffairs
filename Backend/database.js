// Importations
const mongoose = require("mongoose");

// Connection to mongoDB
URI =
  "mongodb+srv://michaelpatrickorg:Bram111555@cluster0.dfplhsl.mongodb.net/pramaffairs_database?retryWrites=true&w=majority&appName=Cluster0";
const connectDB = () => {
  return mongoose
    .connect(URI)
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((err) => {
      console.error("MongoDB connection failed:", err);
      process.exit(1);
    });
};

module.exports = connectDB;

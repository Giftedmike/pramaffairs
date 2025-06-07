require("dotenv").config();
const express = require("express");
const connectDB = require("./database");
const cors = require("cors");
const adminRouter = require("./routes/admin.route");
const userRouter = require("./routes/user.route");
const orderRouter = require("./routes/order.route");



const app = express();

// Apply middlewares first
app.use(cors({
  origin: 'http://localhost:5173'
}));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// Then use routes
app.use("/admin", adminRouter);
app.use("/user", userRouter);
app.post("/order", orderRouter);
  
  

// Connect to MongoDB
connectDB();

// Start server
const PORT = 5000;
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Application is listening at port ${PORT}`);
  }
});

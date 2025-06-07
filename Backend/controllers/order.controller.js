const orderModel = require("../models/order.model");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv").config();

// Setup your nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL,
    pass: process.env.PASS,
  },
});

const orderProduct = (req, res) => {
  const form = new orderModel(req.body);

  form
    .save()
    .then(() => {
      console.log("Product added successfully");

      const mailOptions = {
        from: process.env.MAIL,
        to: req.body.email, // Send email to the customer
        subject: "Product Order Successful",
        text: `Dear Customer,

                Thank you for placing an order with us. This email confirms your successful order for the "${req.body.packageType}" website design package.

                We appreciate your trust in our services and are excited to work with you on bringing your vision to life. A member of our team will contact you shortly to discuss next steps and project details.

                If you have any questions or need assistance, feel free to reply to this email or reach us at pramaffairs@gmail.com.

                Thank you for choosing us.

                Best regards,  
                The Pram | DESIGN Team`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log("Email error:", error);
        } else {
          console.log("Email sent:", info.response);
        }
      });

      res.json({
        status: true,
        message: "Product purchase successful",
      });
    })
    .catch((err) => {
      console.error("Save error:", err);
      res.status(500).json({
        status: false,
        message: "Error saving order",
      });
    });
};

module.exports = { orderProduct };

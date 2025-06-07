require("dotenv").config();
const orderModel = require("../models/order.model");
const nodemailer = require("nodemailer");


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
        to: `${req.body.email}, pramaffairs@gmail.com`,  // sends to customer and your internal team
        subject: "Product Order Successful",
        html: `
  <p>Dear Customer,</p>

  <p>
    Thank you for placing an order with us. This email confirms your successful order for the 
    <strong>${req.body.packageType} website design package</strong>.
  </p>

  <p>
    We appreciate your trust in our services and are excited to work with you on bringing your vision to life. 
    
  </p>
  
  <p>
  A member of our team will contact you shortly to discuss next steps and project details.
  </>

  <table style="border:1px solid #ccc; width: 100%; max-width: 600px; border-radius: 8px; padding: 16px; font-family: Arial, sans-serif;">
    <tr>
      <td>
        <h3 style="margin: 0 0 10px 0;">Payment Details</h3>
        <p><strong>Account Name:</strong> Pramaffairs Enterprices</p>
        <p><strong>Account Number:</strong> 2032337730</p>
        <p><strong>Bank Name:</strong> First Bank</p>
        <p><strong>Account Type:</strong> Current Account</p>
      </td>
    </tr>
  </table>

  <table style="border:1px solid #ccc; width: 100%; max-width: 600px; border-radius: 8px; padding: 16px; font-family: Arial, sans-serif;">
    <tr>
      <td>
        <h3 style="margin: 0 0 10px 0;">Order Summary</h3>
        <p><strong>Package:</strong> ${req.body.packageType}</p>
        <p><strong>Name:</strong> ${req.body.entityName}</p>
        <p><strong>Email:</strong> ${req.body.email}</p>
        <p><strong>Phone:</strong> ${req.body.phone}</p>
        <p><strong>Address:</strong> ${req.body.address}</p>
      </td>
    </tr>
  </table>

  <p>
    If you have any questions or need assistance, feel free to reply to this email or reach us at 
    <a href="mailto:pramaffairs@gmail.com">pramaffairs@gmail.com</a>.
  </p>

  <p>
    Thank you for choosing us.
  </p>

  <p>Best regards,<br/>
  The Pram | DESIGN Team</p>
`,
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

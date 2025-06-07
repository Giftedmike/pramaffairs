const express = require("express");
// const { registerProd } = require("../controllers/product.controller");
let prodRouter = express.Router();


 // POST /product - Add a product
prodRouter.post("/", async (req, res) => {
  try {
    const { prodImage, prodTitle, prodInstruction, link } = req.body;

    const product = new Product({
      prodImage,
      prodTitle,
      prodInstruction,
      link,
    });

    await product.save();
    res.status(201).json({ message: "Product added successfully" });
  } catch (error) {
    console.error("Add product error:", error);
    res.status(500).json({ message: "Failed to add product" });
  }
});

// DELETE /product - Delete by prodTitle
prodRouter.delete("/", async (req, res) => {
  try {
    const { prodTitle } = req.body;
    const deleted = await Product.findOneAndDelete({ prodTitle });

    if (!deleted) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Delete product error:", error);
    res.status(500).json({ message: "Failed to delete product" });
  }
});

// // POST /api/products - add new product
// prodRouter.post("/", async (req, res) => {
//   try {
//     const { prodImage, prodTitle, prodInstruction, link } = req.body;
//     const newProduct = new Product({ prodImage, prodTitle, prodInstruction, link });
//     await newProduct.save();
//     res.status(201).json({ message: "Product added successfully" });
//   } catch (error) {
//     console.error("Add product error:", error);
//     res.status(500).json({ message: "Failed to add product" });
//   }
// });

// // DELETE /api/products - delete product by title
// prodRouter.delete("/", async (req, res) => {
//   try {
//     const { prodTitle } = req.body;
//     const deleted = await Product.findOneAndDelete({ prodTitle });
//     if (!deleted) {
//       return res.status(404).json({ message: "Product not found" });
//     }
//     res.json({ message: "Product deleted successfully" });
//   } catch (error) {
//     console.error("Delete product error:", error);
//     res.status(500).json({ message: "Failed to delete product" });
//   }
// });

module.exports = prodRouter;

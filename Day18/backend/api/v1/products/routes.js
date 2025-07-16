const express = require("express");
const {
  createProductController,
  getAllProducts,
  updateProductController, // ✅ fixed typo
  deleteProductController,
} = require("./controllers.js");

const productRouter = express.Router();

productRouter.get("/", getAllProducts);
productRouter.post("/", createProductController);
productRouter.patch("/:productId", updateProductController); // ✅ fixed typo
productRouter.delete("/:productId", deleteProductController);

module.exports = { productRouter };

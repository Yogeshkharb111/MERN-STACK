const { Product } = require("../../../models/product_schema");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({
      isSuccess: true,
      message: "All products fetched successfully",
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      isSuccess: false,
      message: "Server error",
      error: error.message,
    });
  }
};

const createProductController = async (req, res) => {
  res.status(200).json({
    isSuccess: true,
    message: "Product created (dummy response)",
  });
};

const updateProductController = async (req, res) => {
  res.status(200).json({
    isSuccess: true,
    message: "Product updated (dummy response)",
  });
};

const deleteProductController = async (req, res) => {
  res.status(200).json({
    isSuccess: true,
    message: "Product deleted (dummy response)",
  });
};

module.exports = {
  getAllProducts,
  createProductController,
  updateProductController,
  deleteProductController,
};

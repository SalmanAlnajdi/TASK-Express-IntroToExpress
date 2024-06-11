const Product = require("../../models/Product.js");

const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    return res.json(products);
  } catch (error) {
    return next(error);
  }
};

const getOneProduct = async (req, res) => {
  const id = req.params.id;

  try {
    const product = await Product.findById(id);
    if (product) {
      return res.status(200).json(product);
    } else {
      return res.status(404).first.json({ meg: "product not found!!" });
    }
  } catch (error) {
    return res.status(error.status || 500).json(error);
  }
};

const createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    return res.status(201).json(newProduct);
  } catch (error) {
    return res.status(error.status || 500).json(error);
  }
};

const updateProduct = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body);
    return res.status(202).json(updatedProduct);
  } catch (error) {
    return res.status(error.status || 500).json(error);
  }
};

const deleteProduct = async (req, res) => {
  const id = req.params.id;

  try {
    await Product.findByIdAndDelete(id);
  } catch (error) {
    return res.status(error.status || 500).json(error);
  }
};

module.exports = {
  getAllProducts,
  getOneProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};

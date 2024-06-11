const express = require("express");
const {
  getAllProducts,
  getOneProduct,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("./controllers");

const productRouter = express.Router();

productRouter.get("/", getAllProducts);

productRouter.get("/:id", getOneProduct);

productRouter.post("/", createProduct);

productRouter.put("/:id", updateProduct);

productRouter.delete("/:id", deleteProduct);

module.exports = productRouter;

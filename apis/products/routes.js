const express = require('express');
const {getAllProducts, getOneProduct, createProduct, deleteProduct} = require('./controllers');

const productRouter = express.Router();

productRouter.get('/',getAllProducts);
 
 
 productRouter.get('/:id', getOneProduct);
 
 productRouter.post('/',createProduct);
  
 
 
 productRouter.delete('/:id', deleteProduct );


 module.exports = productRouter;
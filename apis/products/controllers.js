
const products = require('../../data.js');

const getAllProducts = (req, res) => {
    return   res.json(products);
 }

 const getOneProduct = (req, res) => {
    const product = products.find(p => p.id == req.params.id);
    return res.json(product);
}

const createProduct = (req, res) => {
    products.push(req.body);
    return res.json(products);
}

const deleteProduct = (req, res) => {
    const product = products.find(p => p.id == req.params.id);
    products.splice(products.indexOf(product), 1);
    return res.json(products);
}

module.exports = {getAllProducts, getOneProduct, createProduct, deleteProduct};
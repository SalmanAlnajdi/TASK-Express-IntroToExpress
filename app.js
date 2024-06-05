const express = require('express');
const products = require('./data.js');

const app = express();
const PORT = 8000;

app.use(express.json());

app.get('/products', (req, res) => {
   return   res.json(products);
});


app.get('/products/:id', (req, res) => {
        const product = products.find(p => p.id == req.params.id);
        return res.json(product);
    });

app.post('/products', (req, res) => {
        products.push(req.body);
        return res.json(products);
    });
 


app.delete('/products/:id', (req, res) => {
    const product = products.find(p => p.id == req.params.id);
    products.splice(products.indexOf(product), 1);
    return res.json(products);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
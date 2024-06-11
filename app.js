const express = require('express');
const productRouter = require("./apis/products/routes");
const connectDB = require('./database');

const app = express();


const PORT = 8000;

app.use(express.json());

app.use("/products", productRouter);


connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
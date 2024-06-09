const express = require('express');
const productRouter = require("./apis/products/routes");

const app = express();


const PORT = 8000;

app.use(express.json());

app.use("/products", productRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
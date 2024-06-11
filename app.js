const express = require("express");
const productRouter = require("./apis/products/routes");
const connectDB = require("./database");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

const PORT = 8000;

app.use(express.json());

app.use(morgan("dev"));
app.use(cors());

app.use("/products", productRouter);

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

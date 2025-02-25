import express from "express";
import productRouter from "./routes/productRoute.js";
import dbConnect from "./config/dbConnect.js";


dbConnect();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use("/products", productRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`)
});
import express from "express";
import connectDB from "./libs/dbConnect.js";
import {zooRouter} from "./routes/zoo.route.js";

connectDB();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use("/zoos", zooRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`)
});
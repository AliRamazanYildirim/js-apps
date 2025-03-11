import express from "express";
import connectDB from "./libs/dbConnect.js";
import cors from "cors";

connectDB();

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`)
});

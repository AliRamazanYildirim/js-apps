import express from "express";
import cors from "cors";
import connectDB from "./libs/dbConnect.js";
import userRouter from "./routes/userRouter.js";

connectDB();

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`)
});

import express from "express";
import connectDB from "./libs/dbConnect";
import cors from "cors";
import userRouter from "./routes/userRouter";

connectDB();

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/', userRouter)

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`)
});

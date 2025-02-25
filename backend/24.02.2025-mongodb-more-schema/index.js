import express from "express";
import connectDB from "./libs/dbConnect.js";
import {blogPostRouter} from "./routes/blogPost.route.js";
import {userRouter} from "./routes/user.route.js";

connectDB();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use("/blog-posts", blogPostRouter);
app.use("/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`)
});
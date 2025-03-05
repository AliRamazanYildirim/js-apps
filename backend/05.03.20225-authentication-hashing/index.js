import express from "express";
import cors from "cors";
import dbConnect from "./config/db.js";
import userRouter from "./routes/userRouter.js";


const app = express();
const PORT = process.env.PORT || 3000;

dbConnect();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome to the authentication API!");
});


app.use("/users", userRouter);
app.use("/login", userRouter);


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

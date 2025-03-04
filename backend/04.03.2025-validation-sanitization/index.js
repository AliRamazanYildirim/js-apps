import express from "express";
import cors from "cors";
import dbConnect from "./config/db.js";
import { createUser } from "./controllers/userController.js";

const app = express();
const PORT = process.env.PORT || 3000;

dbConnect();

app.use(cors());
app.use(express.json());
app.use("/users", createUser);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

import express from "express";
import usersRouter from "./routes/users.js";
import booksRouter from "./routes/books.js";

const app = express();

const port = process.env.PORT || 3005;

app.use(express.json());

app.use("/users", usersRouter);
app.use("/books", booksRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Internal Server Error" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

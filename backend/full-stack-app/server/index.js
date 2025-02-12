import express from "express";
import usersRouter from "./routes/users.js";
import booksRouter from "./routes/books.js";

const app = express();

const port = process.env.PORT || 3005;

app.use("/users", usersRouter);
app.use("/books", booksRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

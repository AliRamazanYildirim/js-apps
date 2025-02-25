import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import userRoutes from "./routes/user.route.js";
import config from "./config/config.js";
import errorHandler from "./middleware/errorHandler.js";
import applyMiddleware from "./middleware/app.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
applyMiddleware(app);

// Root Route
app.get("/", (req, res) => {
  res.send("Willkommen zur Startseite!");
});

// Health Route
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Routes
app.use("/", userRoutes);

// Error Handling Middleware
app.use(errorHandler);

const PORT = config.port;
app.listen(PORT, () => {
  if (config.nodeEnv === "development") {
    console.log(`Server is running on http://localhost:${PORT}`.cyan.bold);
  } else {
    console.log(`Server is running on http://localhost:${PORT}`.green.bold);
  }
});

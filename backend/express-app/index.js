import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

//__dirname in ES6-Modulen definieren
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Statische Dateien im Verzeichnis 'public' festlegen
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/send", (req, res) => {
  res.send("Hello, World!");
});

app.get("/sendFile", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/json", (req, res) => {
  res.json({ message: "Hello, World!" });
});

app.get("/status", (req, res) => {
  res.status(200).send("Status OK");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
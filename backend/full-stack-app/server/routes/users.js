import { Router } from "express";
import fs from "fs";

const usersRouter = Router();

usersRouter.get("/", (req, res) => {
  try {
    const data = fs.readFileSync("./config/data.json", "utf8");
    const users = JSON.parse(data);
    res.status(200).json(users);
  } catch (error) {
    console.error("Error reading users data:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
})
.get("/details/:id", (req, res) => {
  try {
    const data = fs.readFileSync("./config/data.json", "utf8");
    const users = JSON.parse(data);
    const user = users.find(user => user.id === req.params.id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error("Error reading users data:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
})
.post("/", (req, res, next) => {
  try {
    const data = fs.readFileSync("./config/data.json", "utf8"); // Synchrones Lesen
    const jsonData = JSON.parse(data); // In ein JSON-Objekt umwandeln
    
    let users = jsonData.users || []; // Holen Sie sich das Array users

    const { name, email } = req.body;
    const newUser = { id: users.length + 1, name, email };

    users.push(newUser); // Benutzer hinzufügen
    jsonData.users = users; // Aktualisierte Benutzerdaten in ein JSON-Objekt zurücksetzen

    fs.writeFileSync("./config/data.json", JSON.stringify(jsonData, null, 2)); // JSON-Datei aktualisieren

    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error processing users data:", error);
    next(error);
  }
})
.post("/:id", (req, res, next) => {
  try {
    const data = fs.readFileSync("./config/data.json", "utf8");
    const jsonData = JSON.parse(data);

    let users = jsonData.users || [];
    const { name, email } = req.body;
    const user = users.find(user => parseInt(user.id) === parseInt(req.params.id));

    if (user) {
      user.name = name;
      user.email = email;

      fs.writeFileSync("./config/data.json", JSON.stringify(jsonData, null, 2));
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error("Error processing users data:", error);
    next(error);
  }
});


export default usersRouter;

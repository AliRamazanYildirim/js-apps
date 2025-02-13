import { Router } from "express";
import fs from "fs";
import { randomUUID } from "crypto";

const tasksRouter = Router();

tasksRouter.get("/", (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync("./data.json", "utf8"));
    res.status(200).json(data);
  } catch (error) {
    console.error("Error reading data.json:", error);
    res.status(500).json({ message: error.message });
  }
})
.post("/", async (req, res) => {
  try {
    const { task } = req.body;
    const data = JSON.parse(await fs.promises.readFile("./data.json", "utf8"));
    const newTask = { id: randomUUID(), task };
    data.push(newTask);
    await fs.promises.writeFile("./data.json", JSON.stringify(data, null, 2));
    res.status(201).json(newTask);
  } catch (error) {
    console.error("Error writing to data.json:", error);
    res.status(500).json({ msg: "Server error" });
  }
})
.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let data = JSON.parse(await fs.promises.readFile("./data.json", "utf8"));
    data = data.filter(task => task.id !== id);
    await fs.promises.writeFile("./data.json", JSON.stringify(data, null, 2));
    res.status(200).json({ msg: "Task deleted" });
  } catch (error) {
    console.error("Error deleting task:", error);
    res.status(500).json({ msg: "Server error" });
  }
});

export { tasksRouter };
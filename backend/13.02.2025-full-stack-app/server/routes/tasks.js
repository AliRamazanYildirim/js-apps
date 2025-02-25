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
.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { task } = req.body;
    let data = JSON.parse(await fs.promises.readFile("./data.json", "utf8"));
    const taskIndex = data.findIndex(t => t.id === id);
    if (taskIndex === -1) {
      return res.status(404).json({ msg: "Task not found" });
    }
    data[taskIndex].task = task;
    await fs.promises.writeFile("./data.json", JSON.stringify(data, null, 2));
    res.status(200).json(data[taskIndex]);
  } catch (error) {
    console.error("Error updating task:", error);
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
})
.delete("/", async (req, res) => {
  try {
    await fs.promises.writeFile("./data.json", JSON.stringify([], null, 2));
    res.status(200).json({ msg: "All tasks deleted" });
  } catch (error) {
    console.error("Error deleting all tasks:", error);
    res.status(500).json({ msg: "Server error" });
  }
});

export { tasksRouter };
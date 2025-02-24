import {Router} from "express";
import * as zoo from "../controllers/zoo.controller.js";

export const zooRouter = Router();

zooRouter.get("/", zoo.getAllZoos);
zooRouter.get("/:id", zoo.getZooById);
zooRouter.post("/", zoo.createZoo);
zooRouter.put("/:id", zoo.updateZoo);
zooRouter.delete("/:id", zoo.deleteZoo);


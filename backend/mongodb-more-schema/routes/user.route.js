import { Router } from "express";
import { createUser, getAllUsers } from "../controllers/userController.js";

export const userRouter = Router();

userRouter.get("/", getAllUsers)
.post("/", createUser);
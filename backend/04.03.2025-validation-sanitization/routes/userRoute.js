import { Router } from "express";
import * as user from "../controllers/userController.js";

const userRouter = Router();

userRouter.post("/users", user.createUser);

export default userRouter;
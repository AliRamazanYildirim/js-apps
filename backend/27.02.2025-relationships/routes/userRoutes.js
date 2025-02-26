import {Router} from 'express';
import { createUser, getUsers, addPostToUser } from '../controllers/userController.js';

const userRouter = Router();

userRouter.post('/users', createUser)
.get('/users', getUsers)
.post('/users/:userId/posts', addPostToUser);

export default userRouter;
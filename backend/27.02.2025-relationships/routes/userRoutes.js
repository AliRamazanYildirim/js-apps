import {Router} from 'express';
import { createUser, getUsers, addPostToUser } from '../controllers/userController.js';
import { getUserById } from '../controllers/userController.js';

const userRouter = Router();

userRouter
.get('/users', getUsers)
.get('/users/:id', getUserById)
.post('/users', createUser)
.post('/users/:userId/posts', addPostToUser);

export default userRouter;
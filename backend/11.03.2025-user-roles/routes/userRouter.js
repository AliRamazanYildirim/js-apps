import {Router} from 'express';
import * as user from '../controllers/userController.js';
import { authenticate } from '../middleware/jwt.js';

const userRouter = Router();

userRouter.post('/', user.createUser)
.post('/login', user.userLogin)
.get('/dashboard', authenticate, user.dashboard);

export default userRouter;
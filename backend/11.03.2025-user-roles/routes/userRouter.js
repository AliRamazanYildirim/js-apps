import {Router} from 'express';
import * as user from '../controllers/userController.js';
import { authenticate } from '../middleware/jwt.js';
import { roleCheck } from '../middleware/roleCheck.js';

const userRouter = Router();

userRouter.post('/', user.createUser)
.post('/login', user.userLogin)
.get('/dashboard', authenticate, user.dashboard)
.get('/admin', authenticate, roleCheck('admin'), (req, res) => {
    res.status(200).json({ message: 'Welcome, Admin!' });
});

export default userRouter;
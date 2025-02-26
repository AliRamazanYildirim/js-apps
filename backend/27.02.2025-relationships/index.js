import express from 'express';
import connectDB from './config/db.js';
import userRouter from './routes/userRoutes.js';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

connectDB();

app.use('/api', userRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
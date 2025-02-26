import express from 'express';
import connectDB from './config/db.js';
import userRouter from './routes/userRoutes.js';
import postRouter from './routes/postRoutes.js';



const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

connectDB();

app.use('/api', userRouter);
app.use('/api', postRouter)

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
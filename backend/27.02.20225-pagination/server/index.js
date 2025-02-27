import express from 'express';
import dbConnect from './config/db';
import { productRouter } from './routes/productRoutes';




const app = express();
const PORT = process.env.PORT || 3000;


dbConnect();

app.use(express.json());
app.use('/api', productRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
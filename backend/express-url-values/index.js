import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import userRoutes from './routes/user.route.js';
import config from './config/config.js';
import errorHandler from './middleware/errorHandler.js';
import applyMiddleware from './middleware/app.js';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
applyMiddleware(app);

// Routes
app.use('/', userRoutes);

// Error Handling Middleware
app.use(errorHandler);

app.listen(process.env.PORT || config.port, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT || config.port}`);
});
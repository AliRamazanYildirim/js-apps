import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import logger from './middleware/logger.js';
import cors from 'cors';
import userRoutes from './routes/user.js';
import config from './config/config.js';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors()); // Um CORS-Fehler zu vermeiden
app.use(logger); // Benutzerdefiniertes Middleware
app.use(express.json()); // Um JSON-Daten zu parsen
app.use(express.urlencoded({ extended: false })); // Um Formulardaten zu analysieren
app.use(express.static(path.join(__dirname, 'public'))); // Statische Dateien

// Routes
app.use('/', userRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(config.port, () => {
    console.log(`Server is running on http://localhost:${config.port}`);
});
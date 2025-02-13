import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { tasksRouter } from './routes/tasks.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Manuell __filename und __dirname definieren
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use('/tasks', tasksRouter);

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Der Server hört auf Port ${PORT}`);
});
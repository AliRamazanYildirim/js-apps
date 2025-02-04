import cors from 'cors';
import express from 'express';
import logger from './logger.js';

const applyMiddleware = (app) => {
    app.use(cors()); // Um CORS-Fehler zu vermeiden
    app.use(logger); // Benutzerdefiniertes Middleware
    app.use(express.json()); // Um JSON-Daten zu parsen
    app.use(express.urlencoded({ extended: false })); // Um Formulardaten zu analysieren
    app.use(express.static('public')); // Statische Dateien
};

export default applyMiddleware;
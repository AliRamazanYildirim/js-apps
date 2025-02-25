import dotenv from 'dotenv';

// Lade die Variablen aus der .env-Datei
dotenv.config();

const config = {
    port: process.env.PORT || 3000,
    nodeEnv: process.env.NODE_ENV || 'development',
};

export default config;
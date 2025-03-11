import jwt from 'jsonwebtoken';

const { JWT_SECRET, JWT_EXPIRES_IN } = process.env;

// Funktion zum Generieren eines Tokens
export const generateToken = (payload) => {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN || '1h' });
};

// Funktion zum Verifizieren eines Tokens
export const verifyToken = (token) => {
    return jwt.verify(token, JWT_SECRET);
};
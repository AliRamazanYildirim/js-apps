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

// Middleware zum Authentifizieren des Tokens
export const authenticate = (req, res, next) => {
    const authHeader = req.header('Authorization');

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    const token = authHeader.replace('Bearer ', '');

    try {
        const decoded = verifyToken(token);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).json({ message: 'Invalid token.' });
    }
};
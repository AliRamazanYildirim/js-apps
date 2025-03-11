import User from '../models/user.js';
import { generateToken } from '../middleware/jwt.js';

// Einen neuen User erstellen
export const createUser = async (req, res) => {
    const { name, email, password, roles } = req.body;

    try {
        const newUser = await User.create({ name, email, password, roles });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Alle User abrufen
export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Einen einzelnen User abrufen
export const getUserById = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Einen User aktualisieren
export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email, password, roles } = req.body;

    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.name = name || user.name;
        user.email = email || user.email;
        if (password) {
            user.password = password;
        }
        user.roles = roles || user.roles;

        await user.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Einen User löschen
export const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        await user.remove();
        res.status(200).json({ message: 'User deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Benutzer-Login
export const userLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const isMatch = await user.authenticate(password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = generateToken({ id: user._id, email: user.email, roles: user.roles });
        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Dashboard-Funktion
export const dashboard = async (req, res) => {
    try {
        const user = req.user;
        res.status(200).json({ message: `Hallo ${user.name}, willkommen auf unserer Seite` });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
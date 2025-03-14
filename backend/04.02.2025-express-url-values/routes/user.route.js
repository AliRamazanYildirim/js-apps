import express from 'express';

const router = express.Router();

const users = [
    { id: 1, username: 'user1', email: 'user1@example.com' },
    { id: 2, username: 'user2', email: 'user2@example.com' },
    { id: 3, username: 'user3', email: 'user3@example.com' }
];

// Login Route
router.post('/login', (req, res) => {
    // Login logic here
    res.send('Login route');
});

// Register Route
router.post('/register', (req, res) => {
    // Register logic here
    res.send('Register route');
});

// Alle Benutzer anzeigen Route
router.get('/users', (req, res) => {
    res.json(users);
});

// Benutzer hinzufügen Route
router.post('/users', (req, res) => {
    const user = req.body;
    users.push(user);
    res.status(201).json({
        message: `Willkommen, ${user.username}!`,
        user: user
    });
});

// Benutzer aktualisieren Route
router.put('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);
    if (user) {
        user.username = req.body.username;
        user.email = req.body.email;
        res.json({
            message: `Benutzer mit ID ${id} wurde aktualisiert`,
            user: user
        });
    } else {
        res.status(404).json({
            message: `Benutzer mit ID ${id} nicht gefunden`
        });
    }
});

// Benutzer löschen Route
router.delete('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);
    if (user) {
        users = users.filter(user => user.id !== id);
        res.json({
            message: `Benutzer mit ID ${id} wurde gelöscht`
        });
    } else {
        res.status(404).json({
            message: `Benutzer mit ID ${id} nicht gefunden`
        });
    }
});

export default router;
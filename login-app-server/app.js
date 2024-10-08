const express = require('express');
const bodyParser = require('body-parser');
const bankRoutes = require('./routes/bank');
const cors = require('cors');
const app = express();
const PORT = 5000;
const users = require('./db/users');

app.use(cors({ origin: 'http://localhost:3000' }));

// Middleware
app.use(bodyParser.json());

app.use('/bank', bankRoutes);

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        return res.json({ success: true, username: user.username });
    }
    return res.status(401).json({ success: false, message: 'User does not exist' });
});

// Register route
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    const userExists = users.some(u => u.username === username);
    if (userExists) {
        return res.status(400).json({ success: false, message: 'User already exists' });
    }
    users.push({ username, password });
    return res.json({ success: true, username });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

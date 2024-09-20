const users = require('../db/users');

const authMiddleware = (req, res, next) => {
    const { username } = req.query; // Access username from query parameters

  // Check if the user exists in the database
  const user = users.find(user => user.username === username);
  
  if (!user) {
    return res.status(403).json({ message: 'User not recognized' });
  }

  // Add user to request object so it can be accessed in the route handler
  req.user = user;
  next();
};

module.exports = authMiddleware;

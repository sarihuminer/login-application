const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Route to get bank details of the user
router.get('/bank-details', authMiddleware, (req, res) => {
  const user = req.user;

  if (!user) {
    return res.status(403).json({ message: 'User not recognized' });
  }

  return res.json({
    message: 'Bank details retrieved successfully',
    accountDetails: {
      username: user.username,
      accountNumber: user.accountNumber,
      balance: user.balance,
    },
  });
});

module.exports = router;

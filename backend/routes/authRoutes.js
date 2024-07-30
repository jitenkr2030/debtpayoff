const User = require('../models/User');
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Register route
router.post('/register', authController.registerUser);

// Login route (if applicable)
router.post('/login', authController.loginUser);

module.exports = router;

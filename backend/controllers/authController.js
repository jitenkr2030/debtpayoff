const User = require('../models/User');
const authService = require('../services/authService');
const generateToken = require('../config/auth');

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await authService.registerUser(name, email, password);
    res.status(201).json({ token: generateToken(user) });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await authService.loginUser(email, password);
    res.status(200).json({ token: generateToken(user) });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.resetPassword = async (req, res) => {
  const { email, newPassword } = req.body;
  try {
    await authService.resetPassword(email, newPassword);
    res.status(200).json({ message: 'Password reset successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
